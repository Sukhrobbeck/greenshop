import type { FC } from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Discount from "./Discount";

const Dashboard: FC = () => {
  return (
    <div className="h-fit bg-[#f5f5f5f5] pt-[14px] max-lg:hidden w-[360px]">
      <Categories />
      <PriceRange />
      <Discount />
    </div>
  );
};

export default Dashboard;
