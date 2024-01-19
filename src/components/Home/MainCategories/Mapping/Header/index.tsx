import type { FC } from "react";
import { Select, Space } from "antd";
import { useSearchParams } from "react-router-dom";

const Header: FC = () => {
  const sortingOptions = [
    {
      value: "default-sorting",
      label: "Default Sorting",
    },
    {
      value: "the-cheapest",
      label: "The Cheapest",
    },
    {
      value: "most-expensive",
      label: "Most Expensive",
    },
  ];

  const active_type_style =
    "pb-[4px] text-[#46A358] border-b-2 border-[#46A358] transition-colors";

  const [getParams, setParams] = useSearchParams();
  const range_min: string = String(getParams.get("range_min") ?? 0);
  const range_max: string = String(getParams.get("range_max") ?? 1000);
  const category: string = String(getParams.get("category") ?? "house-plants");
  const sort: string = String(getParams.get("sort") ?? "default-sorting");

  const active_type = getParams.get("type") ?? "all-plants";
  console.log(active_type);

  const onTypeChangeFn = (type: string) => {
    setParams({
      category,
      range_min,
      range_max,
      type,
      sort,
    });
  };

  const sortByPrice = (sort: string) => {
    setParams({
      category,
      range_min,
      range_max,
      type: active_type,
      sort,
    });
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-[35px] cursor-pointer text-neutral-700 text-[15px] font-bold transition-colors hover:border-b-[#46a358] border-spacing-1">
        <p
          className={`hover:text-[#46a358] ${
            active_type === "all-plants" && active_type_style
          }`}
          onClick={() => onTypeChangeFn("all-plants")}
        >
          All Plants
        </p>
        <p
          className={`hover:text-[#46a358] ${
            active_type === "new-arrivals" && active_type_style
          }`}
          onClick={() => onTypeChangeFn("new-arrivals")}
        >
          New Arrivals
        </p>
        <p
          className={`hover:text-[#46a358] ${
            active_type === "sale" && active_type_style
          }`}
          onClick={() => onTypeChangeFn("sale")}
        >
          Sale
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="max-lg:hidden flex gap-2 items-center text-[15px] font-bold text-neutral-700 mb-2">
          Sort by:
          <Space wrap className="w-[140px]">
            <Select
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
              }}
              className="text-base font-bold text-neutral-700"
              defaultValue={"Default Sorting"}
              options={sortingOptions}
              onChange={(e) => sortByPrice(e)}
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
