import { Skeleton } from "antd";
import { Product } from "../../../../@types";
import type { FC } from "react";

const Card: FC<Product> = ({ isLoading, isError, data }) => {
  return (
    <>
      {isLoading ?? isError ? (
        <div className="w-[230px] h-[300px] flex flex-col items-center">
          <div className="bg-[#FBFBFB] w-full h-[230px] flex justify-center items-center">
            <Skeleton.Image
              active
              style={{ width: "230px", height: "230px" }}
            />
          </div>
          <div className="w-full pt-3 flex flex-col gap-[5px]">
            <Skeleton.Input active />
            <Skeleton.Input active />
          </div>
        </div>
      ) : (
        <div className="w-[230px] h-[300px] flex flex-col items-center cursor-pointer">
          <div className="bg-[#FBFBFB] w-full h-[230px] flex justify-center items-center">
            <img
              src={data?.main_image}
              alt="image"
              className="w-[210px] h-[210px]"
            />
          </div>
          <div className="w-full pt-3">
            <p className="text-neutral-700 text-[15px] font-bold">
              {data?.title}
            </p>
            <h4 className="text-green-500 text-base font-bold font-['Inter'] leading-none mt-[5px]">
              ${data?.price}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
