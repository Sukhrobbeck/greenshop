import type { FC } from "react";

const ShopNavigator: FC = () => {
  return (
    <div className="w-full h-[100px] flex items-center gap-1 transition-colors">
      <p className="text-neutral-700 text-[15px] font-bold cursor-pointer hover:text-[#46a358]">
        Home
      </p>
      <span>/</span>
      <p className="text-neutral-700 text-[15px] font-bold cursor-pointer hover:text-[#46a358]">
        Shop
      </p>
    </div>
  );
};

export default ShopNavigator;

// text-neutral-700 text-[15px] font-bold font-['Inter'] leading-none">Home</span><span style="text-neutral-700 text-[15px] font-normal font-['Inter'] leading-none
