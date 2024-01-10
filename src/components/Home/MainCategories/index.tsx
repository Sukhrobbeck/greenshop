import type { FC } from "react";
import Dashboard from "./Dashboard";
import FlowerContainer from "./Mapping";
import Header from "./Header";

const MainCategories: FC = () => {
  return (
    <div className="flex gap-[50px] mt-[45px]">
      <Dashboard />
      <div className="flex flex-col gap-8 w-full">
        <Header />
        <FlowerContainer />
      </div>
    </div>
  );
};

export default MainCategories;
