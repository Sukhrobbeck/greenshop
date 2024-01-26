import { Rate, Skeleton, Tooltip } from "antd";
import type { FC } from "react";
import useQueryHandler from "../../../hooks/useQuery";
import { Product } from "../../../@types";
import { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNotificationAPI } from "../../../generic/NotificationAPI";

const ShortDescription: FC<Product> = ({ data, isLoading, isError }) => {
  const useQuery = useQueryHandler();
  const notify = useNotificationAPI();

  const response = useQuery({
    queryURL: `/user/by_id/${data?.created_by}`,
    queryKEY: `/user-${data?.created_by}`,
    method: "GET",
  });

  const size_style =
    "w-[35px] h-[35px] rounded-full border-2 border-gray-200 flex justify-center items-center cursor-pointer text-neutral-500 text-base font-semibold hover:border-[#46a358]";
  const active_size_style = "text-[#46a358] text-lg border-[#46a358]";
  const [activeSize, setActiveSize] = useState(String("s"));
  const [count, setCount] = useState(0);

  const [addedToWhishlist, setAddedToWhishlist] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[15px]">
      <div className="w-full h-[100px] flex gap-[10px] items-center border-b-[2px] border-[#46a358]">
        {isLoading ?? isError ? (
          <Skeleton.Avatar
            active={true}
            style={{ width: "50px", height: "50px" }}
          />
        ) : (
          <Tooltip title={`${response.data?.name} ${response.data?.surname}`}>
            <img
              className="w-[57px] h-[50px] rounded-full cursor-pointer"
              src={String(response.data?.profile_photo)}
              alt={response.data?.name}
            />
          </Tooltip>
        )}
        <div className="flex flex-col w-full">
          <h1 className="text-neutral-700 text-[28px] font-bold">
            {isLoading ?? isError ? <Skeleton.Input active /> : data?.title}
          </h1>
          <div className="flex justify-between w-full">
            <p className="text-green-500 text-[22px] font-bold">
              {isLoading ?? isError ? (
                <Skeleton.Input active />
              ) : (
                `$${data?.price}`
              )}
            </p>
            <div className="flex gap-2">
              <Rate defaultValue={data?.rate} />
              <p className="text-neutral-700 text-[15px] font-semibold">
                {data?.comments?.length} Customer Review
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-xl font-semibold text-neutral-700 ">
          Short description:
        </h3>
        <p className="text-base font-semibold text-neutral-500">
          {isLoading ?? isError ? (
            <Skeleton paragraph={true} />
          ) : (
            data?.short_description
          )}
        </p>
        <p className="mt-[10px] text-neutral-700 text-xl font-semibold">Size</p>
      </div>
      <div className="mt-[10px] flex flex-col gap-[25px]">
        <div className="flex gap-[10px]">
          <div
            className={`${size_style} ${
              activeSize == "s" ? active_size_style : ""
            }`}
            onClick={() => setActiveSize("s")}
          >
            S
          </div>
          <div className={`${size_style}`} onClick={() => setActiveSize("m")}>
            M
          </div>
          <div className={`${size_style}`} onClick={() => setActiveSize("l")}>
            L
          </div>
          <div className={`${size_style}`} onClick={() => setActiveSize("xl")}>
            XL
          </div>
        </div>
        <div className="flex gap-[25px]">
          <div className="flex gap-5 items-center">
            <button
              disabled={count === 0 ? true : false}
              onClick={() => setCount(count - 1)}
              className="cursor-pointer w-[40px] h-[40px] bg-gradient-to-b from-green-500 to-green-500 rounded-full text-white font-semibold text-2xl"
            >
              -
            </button>
            <p className="font-bold text-neutral-700 text-xl">{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="cursor-pointer w-[40px] h-[40px] bg-gradient-to-b from-green-500 to-green-500 rounded-full text-white font-semibold text-xl"
            >
              +
            </button>
          </div>
          <div className="flex gap-[10px]">
            <button className="w-[130px] h-10 bg-green-500 rounded-md text-white text-base font-bold leading-tight">
              BUY NOW
            </button>
            <button
              className="w-[130px] h-10 rounded-md border border-green-500 text-green-500 text-base font-bold leading-tight"
              onClick={() => notify("added_to_shopping_cart")}
            >
              ADD TO CART
            </button>
            <button
              className="w-10 h-10 rounded-md border border-green-500"
              onClick={() => {
                setAddedToWhishlist(!addedToWhishlist);
                !addedToWhishlist
                  ? notify("added_to_wishlist")
                  : notify("removed_from_wishlist");
              }}
            >
              {addedToWhishlist ? (
                <HeartFilled style={{ color: "red" }} />
              ) : (
                <HeartOutlined style={{ color: "#46a358" }} />
              )}
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-[15px]">
        <p className="text-neutral-400 text-[15px] font-semibold leading-none flex gap-2">
          SKU:
          <span className="text-neutral-600">{data?._id}</span>
        </p>
        <p className="text-neutral-400 text-[15px] font-semibold leading-none flex gap-2">
          Category:
          <span className="text-neutral-600">
            {data?.category.toUpperCase()}
          </span>
        </p>
        <p className="text-neutral-400 text-[15px] font-semibold leading-none flex gap-2">
          Tags:
          <span className="text-neutral-600">Home, Gardening, Plants</span>
        </p>
      </div>
    </div>
  );
};

export default ShortDescription;
