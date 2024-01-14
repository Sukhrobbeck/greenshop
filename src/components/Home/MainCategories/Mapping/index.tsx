import axios from "axios";
import type { FC } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import useLoader from "../../../../generic/Loaders";

interface FlowerDataTypes {
  main_image: string;
  detailed_images: object;
  catrgory: string;
  title: string;
  price: number;
  dicount: boolean;
  description: string;
  short_description: string;
  rate: number;
  tags: object;
  created_at: string;
  created_by: string;
  __v: number;
  _id: string;
}

const FlowerContainer: FC = () => {
  const [params] = useSearchParams();
  const category: string = String(params.get("category") ?? "house-plants");
  const range_min: string = String(params.get("range_min") ?? 0);
  const range_max: string = String(params.get("range_max") ?? 1000);

  const { data, isLoading } = useQuery(
    `/flowerData/${category}?range_min=${range_min}&range_max=${range_max}`,
    () =>
      axios({
        url: `https://greenshop.abduvoitov.com/api/flower/category/${category}`,
        params: {
          access_token: "64bebc1e2c6d3f056a8c85b7",
          range_min,
          range_max,
        },
      }).then((res) => {
        return res.data.data;
      }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const { card_loader } = useLoader();

  return (
    <div className="grid grid-cols-3 gap-[30px] max-sm:grid-cols-2 max-[400px]:grid-cols-1">
      {isLoading
        ? card_loader()
        : data?.map((value: FlowerDataTypes, id: number) => (
            <Card key={id} {...value} />
          ))}
    </div>
  );
};

export default FlowerContainer;
