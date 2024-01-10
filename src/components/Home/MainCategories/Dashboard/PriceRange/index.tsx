import { useState, type FC, SetStateAction } from "react";
import { Slider } from "antd";

const PriceRange: FC = () => {
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  return (
    <div className="mt-[30px]">
      <h3 className="text-neutral-700 text-lg font-bold ml-[18px]">
        Price Range
      </h3>
      <div className="pl-[30px]">
        <Slider
          range
          min={0}
          max={1000}
          defaultValue={price}
          className="w-[170px]"
          onChange={(e: SetStateAction<[number, number]>) => setPrice(e)}
        />
        <p className="text-neutral-700 text-[15px] font-normal">
          Price:
          <span className="text-[#46a358] font-bold">
            ${price[0]} - {price[1]}
          </span>
        </p>
        <button className="w-[90px] h-[35px] bg-[#46a358] rounded-md text-white text-base font-bold mt-4">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
