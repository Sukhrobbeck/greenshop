import type { FC } from "react";
import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "./SiteMap";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setSiteMapVisibility } from "../../redux/modalSlice";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  return (
    <div className="w-[80%] p-[32px] m-auto  flex justify-between border-b border-[#46a358]">
      <SiteMap />
      <div className="flex items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        />
      </div>
      <div className="flex gap-6 items-center max-sm:hidden font-inter font-semibold fon">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>
      <div className="flex gap-6 items-center max-sm:hidden">
        <SearchOutlined className="text-[23px] cursor-pointer" />
        <BellOutlined className="text-[23px] cursor-pointer" />
        <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
        <button className="bg-[#46a358] w-[96px] h-[36px] rounded-md text-white flex justify-center items-center gap-2">
          <LoginOutlined className="text-[23px]" />
          Login
        </button>
      </div>
      <div className="flex gap-6 items-center hidden max-sm:flex">
        <SearchOutlined className="text-[23px] cursor-pointer" />
        <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
        <MenuOutlined
          onClick={() => dispatch(setSiteMapVisibility())}
          className="text-[23px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
