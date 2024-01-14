import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import useLoader from "../../../../../generic/Loaders";

interface DataItemsType {
  title: string;
  count: number;
  created_at: Date;
  created_by: string;
  route_path: string;
  _id: string;
}

const Categories: FC = () => {
  const { data, isLoading } = useQuery(
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
  const { category_loader } = useLoader();

  const range_min: string = String(params.get("range_min") ?? 0);
  const range_max: string = String(params.get("range_max") ?? 1000);

  return (
    <div>
      <h3 className="font-bold text-lg pl-[18px]">Categories</h3>
      <div className="mt-[7px]">
        {isLoading
          ? category_loader()
          : data?.data?.data?.map((value: DataItemsType) => (
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
                    range_min,
                    range_max,
                  })
                }
              >
                <p>{value.title}</p>
                <span>({value.count})</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Categories;
