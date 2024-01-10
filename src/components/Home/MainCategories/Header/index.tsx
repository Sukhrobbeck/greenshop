import type { FC } from "react";
import { Select, Space } from "antd";

const Header: FC = () => {
  const sortingOptions = [
    {
      value: "default sorting",
      label: "Default Sorting",
    },
    {
      value: "the cheapest",
      label: "The Cheapest",
    },
    {
      value: "most expensive",
      label: "Most Expensive",
    },
  ];
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-[35px] cursor-pointer text-neutral-700 text-[15px] font-bold transition-colors hover:border-b-[#46a358] border-spacing-1">
        <p className="hover:text-[#46a358]">All Plants</p>
        <p className="hover:text-[#46a358]">New Arrivals</p>
        <p className="hover:text-[#46a358]">Sale</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="max-lg:hidden">
          Sort by:
          <Space wrap className="w-[140px]">
            <Select
              className="text-base font-bold text-neutral-700"
              defaultValue={"Default Sorting"}
              options={sortingOptions}
            />
          </Space>
        </div>
        <div className="hidden max-lg:flex">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcontroller.svg?alt=media&token=deb9f856-b453-4688-ad78-293bb8b3fb71"
            }
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
