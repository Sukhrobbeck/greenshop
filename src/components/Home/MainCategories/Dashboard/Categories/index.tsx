import { useState, type FC, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";

interface DataItemsType {
  title: string;
  count: number;
  created_at: Date;
  created_by: string;
  route_path: string;
  _id: string;
}

const Categories: FC = () => {
  const { data } = useQuery(
    "/categories",
    () =>
      axios({
        url: "https://greenshop.abduvoitov.com/api/flower/category",
        params: {
          access_token: "64bebc1e2c6d3f056a8c85b7",
        },
      }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const [params, setParams] = useSearchParams();
  const active_path: string = String(params.get("category") ?? "house-plants");

  const [skeletonVisibility, setSkeletonVisibility] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setSkeletonVisibility(false);
      }, 2000);
    }
  }, [data]);

  return (
    <div>
      <h3 className="font-bold text-lg pl-[18px]">Categories</h3>
      <div className="mt-[7px]">
        {data?.data?.data?.map((value: DataItemsType) => (
          <div
            key={value._id}
            className={`flex justify-between pl-[30px] pr-[25px] font-bold leading-10 cursor-pointer hover:text-[#46a358] transition-colors ${
              active_path === value.route_path
                ? "text-[#46a358]"
                : "text-neutral-700"
            }`}
            onClick={() =>
              setParams({
                category: value.route_path,
              })
            }
          >
            <Skeleton
              loading={skeletonVisibility}
              active={true}
              paragraph={false}
              title={{ width: "100%" }}
            >
              <p>{value.title}</p>
              <span>({value.count})</span>
            </Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
