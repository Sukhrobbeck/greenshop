import type { FC } from "react";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface FlowerDataTypes {
  main_image: string;
  detailed_images: object;
  category: string;
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

const Card: FC<FlowerDataTypes> = ({
  main_image,
  title,
  price,
  category,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[300px] bg-[#f5f5f5] flex items-center justify-center relative group">
        <img src={main_image ?? ""} alt="img" className="h-[250px] w-[250px]" />
        <div className="absolute bottom-5 hidden group-hover:flex gap-2 cursor-pointer">
          <div className="bg-white w-[35px] h-[35px] rounded-lg flex justify-center items-center">
            <ShoppingCartOutlined />
          </div>
          <div className="bg-white w-[35px] h-[35px] rounded-lg flex justify-center items-center">
            <HeartOutlined />
          </div>
          <div
            onClick={() => navigate(`/shop/${category}/${_id}`)}
            className="bg-white w-[35px] h-[35px] rounded-lg flex justify-center items-center"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <div className="mt-[12px]">
        <p className="text-neutral-700 text-base font-semibold">{title}</p>
        <p className="text-green-500 text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default Card;
