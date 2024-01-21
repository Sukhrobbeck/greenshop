import type { FC } from "react";

interface CardType {
  title: string;
  button_text: string;
  flower_url: string;
  img_index: number;
}

const Card: FC<CardType> = ({ title, button_text, flower_url, img_index }) => {
  return (
    <div className="h-[450px] relative bg-[#f5f5f5] flex mt-3 max-2xl:h-[400px] max-md:h-[250px] max-[530px]:h-[280px] max-[500px]:h-[330px] max-[350px]:h-[350px]">
      <div className="flex-[2] pl-10 max-sm:pl-5 max-[350px]:pl-3">
        <h3 className="font-medium text-base text-[#3d3d3d] mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[35px] max-[840px]:mt-[50px] max-[1250px]:mt-[40px]">
          WELCOME TO GREENSHOP
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl text-[70px] font-['Inter'] uppercase leading-[70px]">
          {`${title} `}
          <span className="text-green-500">PLANET</span>
        </h1>
        <p className="text-[#727272] font-normal font-['Inter'] text-sm w-3/5 max-lg:text-xs mt-[10px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants
        </p>
        <button className="mt-[40px] w-[140px] h-[40px] bg-green-500 rounded-md text-white text-base font-bold uppercase leading-tight max-[1250px]:mt-[30px] max-[1130px]:mt-[30px] max-[780px]:mt-[20px] max-[350px]:h-[25px] max-[350px]:w-[110px] max-[350px]:text-xs">
          {button_text}
        </button>
      </div>
      <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
        <img alt={`flower_${img_index}`} src={flower_url} />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt="flower_2"
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default Card;
