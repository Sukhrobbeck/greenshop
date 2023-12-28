import type { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

interface DataItemsType {
  title: string;
  count: number;
  created_at: Date;
  created_by: string;
  route_path: string;
  id: string;
}

const Categories: FC = () => {
  const [data, setData] = useState<DataItemsType[]>([]);
  useEffect(() => {
    axios({
      url: "https://greenshop.abduvoitov.com/api/flower/category",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        page_size: 2,
        current_page: 5,
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
      <h3 className="font-bold">Categories</h3>
      <div className="mt-[15px]">
        {data?.map((value) => (
          <div key={value.id} className="flex flex-col gap-[15px]">
            <div className="flex justify-between">
              <p>{String(value?.title)}</p>
              <span>({value.count})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
