import type { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

interface DataItemsType {
  title: string;
  count: number;
  created_at: Date;
  created_by: string;
  route_path: string;
  _id: string;
}

const Categories: FC = () => {
  const [data, setData] = useState<DataItemsType[]>([]);
  useEffect(() => {
    axios({
      url: "https://greenshop.abduvoitov.com/api/flower/category",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3 className="font-bold text-lg font-['Inter'] pl-[18px]">Categories</h3>
      <div className="mt-[7px]">
        {data?.map((value) => (
          <div
            key={value._id}
            className="flex justify-between pl-[30px] pr-[25px] text-neutral-700 font-bold font-['Inter'] leading-10 cursor-pointer hover:text-[#46a358] transition-colors"
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
