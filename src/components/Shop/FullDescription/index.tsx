import { useState, type FC } from "react";
import { Product } from "../../../@types";
import Description from "./Description";
import Reviews from "./Reviews";

const FullDescription: FC<Product> = ({ isLoading, isError, data }) => {
  const [activeSection, setActiveSection] = useState("description");
  const sectionStyle =
    "text-neutral-700 text-[17px] font-semibold leading-none cursor-pointer";
  const activeStyle =
    "text-green-500 text-[17px] font-bold leading-none  border-b-[3px] border-[#46a358] py-3 cursor-pointer";

  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="flex items-center gap-5 transition-colors border-b border-[#46a358]">
        <div
          className={`${
            activeSection === "description" ? activeStyle : sectionStyle
          }`}
          onClick={() => setActiveSection("description")}
        >
          Product description
        </div>
        <div
          className={`${
            activeSection === "reviews" ? activeStyle : sectionStyle
          }`}
          onClick={() => setActiveSection("reviews")}
        >
          Reviews ({data?.comments.length ? data.comments.length : 0})
        </div>
      </div>
      {activeSection === "description" ? (
        <Description data={data} isLoading={isLoading} isError={isError} />
      ) : (
        <Reviews />
      )}
    </div>
  );
};

export default FullDescription;
