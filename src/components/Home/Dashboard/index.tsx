import type { FC } from "react";
import Categories from "./Categories";

const Dashboard: FC = () => {
  return (
    <div className="w-[310px] bg-[#f5f5f5] p-[15px] max-lg:hidden mt-[25px]">
      <Categories />
    </div>
  );
};

export default Dashboard;
