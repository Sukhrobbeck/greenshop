import axios from "axios";
import { useEffect, type FC, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const FlowerContainer: FC = () => {
  const [params] = useSearchParams();
  const category: string = String(params.get("category") ?? "house-plants");
  const [flowerData, setFlowerData] = useState([]);

  const { refetch } = useQuery("/flowerData", () =>
    axios({
      url: `https://greenshop.abduvoitov.com/api/flower/category/${category}`,
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
    }).then((res) => setFlowerData(res.data.data)),
  );

  useEffect(() => {
    refetch();
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-[30px] max-sm:grid-cols-2 max-[400px]:grid-cols-1">
      {flowerData?.map((value: any, id: number) => (
        <div key={id}>
          <div className="group h-[300px] bg-[#f5f5f5] flex items-center justify-center">
            <div className="w-[250px] h-[250px] bg-[#f5f5f5] flex items-center justify-center">
              <img src={value.main_image} alt="image" />
            </div>
          </div>
          <div className="mt-[12px]">
            <p className="text-neutral-700 text-base font-semibold">
              {value.title}
            </p>
            <p className="text-green-500 text-lg font-bold">${value.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowerContainer;

// useEffect(() => {
//   axios({
//     url: `https://greenshop.abduvoitov.com/api/flower/category/${category}`,
//     params: {
//       access_token: "64bebc1e2c6d3f056a8c85b7",
//     },
//   }).then((res) => {
//     setData(res.data.data);
//   });
// }, [category]);
