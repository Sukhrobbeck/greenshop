import { useState, type FC } from "react";
import { Image, Skeleton } from "antd";

interface DataItemsType {
  main_image: string;
  detailed_images: string[];
  isLoading: boolean;
  isError: boolean;
}

const ImageGalery: FC<DataItemsType> = ({
  detailed_images,
  main_image,
  isLoading,
  isError,
}) => {
  const [activeImage, setActiveImage] = useState<{
    isSelected: boolean;
    value: string;
  }>({
    isSelected: false,
    value: "",
  });

  return (
    <div className="flex gap-[30px]">
      <div className="flex flex-col justify-between">
        {isLoading ?? isError
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-[100px] h-[100px] border-2 bg-[#fafafa] hover:border-[#46a358] transition-colors rounded-sm cursor-pointer shadow-md"
              >
                <Skeleton.Image
                  active={true}
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "2px",
                  }}
                />
              </div>
            ))
          : detailed_images?.map((value, index) => (
              <div
                key={index}
                className="w-[100px] h-[100px] border-2 hover:border-[#46a358] transition-colors rounded-sm cursor-pointer bg-[#fafafa] shadow-2xl flex items-center justify-center"
              >
                <img
                  src={value}
                  alt="flower"
                  className="w-full h-full"
                  onClick={() =>
                    setActiveImage({ isSelected: true, value: value })
                  }
                />
              </div>
            ))}
      </div>
      <div className="bg-[#fafafa] flex items-center justify-center cursor-pointer w-[500px] h-[500px] shadow-2xl">
        {isLoading ?? isError ? (
          <Skeleton.Image
            style={{ width: "500px", height: "500px" }}
            active={true}
          />
        ) : (
          <Image
            loading="lazy"
            src={activeImage.isSelected ? activeImage.value : main_image}
            alt="main_image"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default ImageGalery;
