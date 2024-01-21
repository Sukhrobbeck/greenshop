import type { FC } from "react";
import useLoader from "../../generic/Loaders";
import { useAssets } from "../../hooks/useAssets";
import Button from "../../generic/Button";
import { useState, useRef } from "react";
import { useHandler } from "../../generic/Handlers";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";

const Footer: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  const {
    logo,
    location,
    email,
    call,
    footer_flower_1,
    footer_flower_2,
    facebook_green,
    instagram_green,
    twitter_green,
    linkedin_green,
    union_green,
    paypal,
    master_card,
    visa,
    amex,
  } = useAssets("icons");

  const [suscribeMode, setSubscribeMode] = useState<{
    isLoading: boolean;
    isSubscribed: boolean;
  }>({
    isLoading: false,
    isSubscribed: false,
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const { emailSubscriber } = useHandler();

  const onSubscribe = async () => {
    setSubscribeMode({ isLoading: true, isSubscribed: false });
    await emailSubscriber({ email: String(emailRef.current?.value) });
    setSubscribeMode({ isLoading: false, isSubscribed: true });
  };

  const max_sm_style = ["max-sm:border-r-0 max-sm:border-b-2"];

  const max_380_style = [
    "max-[380px]:flex max-[380px]:flex-col max-[380px]:justify-center max-[380px]:items-center max-[380px]:text-center",
  ];

  return (
    <div className="w-full h-fit mt-[25px]">
      <div className="bg-[#f5f5f5] py-[15px] flex items-center justify-between max-lg:flex-col">
        <div className="flex max-sm:flex-col">
          {/* Card */}
          <div
            className={`border-r-2 border-[#46a358] m-[23px] pr-[23px] ${max_sm_style} max-sm:pb-[20px] ${max_380_style}`}
          >
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_1}
              alt="footer_flower_1"
            />
            <div className="flex flex-col gap-[9px] mt-[17px]">
              <h4 className="text-neutral-700 text-[17px] font-bold">
                Garden Care
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div
            className={`border-r-2 border-[#46a358] m-[23px] pr-[23px] ${max_sm_style} max-sm:py-[20px] ${max_380_style}`}
          >
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_2}
              alt="footer_flower_1"
            />
            <div className="flex flex-col gap-[9px] mt-[17px]">
              <h4 className="text-neutral-700 text-[17px] font-bold">
                Plant Renovation
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div
            className={`m-[23px] pr-[23px] ${max_sm_style} max-sm:py-[20px] max-sm:border-[#46a358] ${max_380_style}`}
          >
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_1}
              alt="footer_flower_1"
            />
            <div className="flex flex-col gap-[9px] mt-[17px]">
              <h4 className="text-neutral-700 text-[17px] font-bold">
                Watering Garden
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-[18px] m-[25px] max-[380px]:text-center max-[380px]:py-[5px]  max-[380px]:m-0">
          <h1 className="text-neutral-700 text-lg font-bold">
            Would you like to join newsletters?
          </h1>
          <div className="flex max-[380px]:px-[10px]">
            <input
              type="text"
              className="h-10 w-4/5 rounded-s-xl pl-[11px] text-neutral-500 font-semibold placeholder:font-semibold max-[380px]:pl-[5px] max-[380px]:placeholder:text-sm focus:border-none focus:outline-2 outline-[#46a358]"
              placeholder="Enter your email address..."
              disabled={suscribeMode.isSubscribed}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.keyCode === 13 || e.type === "click") &&
                onSubscribe()
              }
            />
            <Button
              className="w-[85px] h-10 font-bold"
              disabled={suscribeMode.isSubscribed}
              onClick={onSubscribe}
            >
              {suscribeMode.isLoading ? (
                <LoadingOutlined />
              ) : suscribeMode.isSubscribed ? (
                <CheckOutlined />
              ) : (
                <p className="font-bold">Join</p>
              )}
            </Button>
          </div>
          <p className="text-neutral-500 text-sm font-normal">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
        {/* Newsletter */}
      </div>
      <div className="bg-[#d1e2d4] p-[30px] flex justify-between items-center text-neutral-700 text-sm font-medium max-xl:flex-col max-xl:gap-[16px] max-xl:text-center max-sm:px-0">
        <img src={logo} alt="logo" className="max-xl:mb-4" />
        <div className="flex gap-[9px] font-semibold">
          <img src={location} alt="location" />
          <p>
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-[9px] font-semibold">
          <img src={email} alt="message" />
          <p>contact@greenshop.com</p>
        </div>
        <div className="flex gap-[9px] font-semibold">
          <img src={call} alt="phone" />
          <p>+88 01911 717 490</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-[35px] pl-[25px] pr-[200px] flex justify-between border-b-2 border-[#46A358] max-xl:px-[25px] max-md:flex-col max-md:items-start max-md:gap-4 max-sm:items-center max-sm:text-center max-md:p-[23px]">
        <div>
          <h3 className="text-neutral-700 text-lg font-bold">My Account</h3>
          <div className="cursor-pointer text-neutral-700 text-base font-semibold leading-[30px]">
            <p className="hover:text-[#46a358] transition-colors">My Account</p>
            <p className="hover:text-[#46a358] transition-colors">Address</p>
            <p className="hover:text-[#46a358] transition-colors">Wishlist</p>
          </div>
        </div>
        <div>
          <h3 className="text-neutral-700 text-lg font-bold">Categories</h3>
          <div className="cursor-pointer text-neutral-700 text-base font-semibold leading-[30px]">
            <p className="hover:text-[#46a358] transition-colors">
              House Plants
            </p>
            <p className="hover:text-[#46a358] transition-colors">
              Potter Plants
            </p>
            <p className="hover:text-[#46a358] transition-colors">Seeds</p>
            <p className="hover:text-[#46a358] transition-colors">
              Small Plants
            </p>
            <p className="hover:text-[#46a358] transition-colors">
              Accessories
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-5">
            <h3 className="text-neutral-700 text-lg font-bold">Social Media</h3>
            <div className="flex gap-[10px]">
              <div className="border border-[#46A35833] rounded-md w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={facebook_green}
                  alt="facebook_green"
                />
              </div>
              <div className="border border-[#46A35833] rounded-md w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={instagram_green}
                  alt="instagram_green"
                />
              </div>
              <div className="border border-[#46A35833] rounded-md w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={twitter_green}
                  alt="twitter_green"
                />
              </div>
              <div className="border border-[#46A35833] rounded-md w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={linkedin_green}
                  alt="linkedin_green"
                />
              </div>
              <div className="border border-[#46A35833] rounded-md w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={union_green}
                  alt="union_green"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-neutral-700 text-lg font-bold">We Accept</h3>
            <div className="flex gap-[10px] max-md:justify-between">
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={paypal}
                alt="pay_pal"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={master_card}
                alt="master_card"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={visa}
                alt="visa"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={amex}
                alt="american_express"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] flex justify-center items-center">
        <h1 className="text-neutral-700 text-sm font-bold">
          © 2024 GreenShop. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};
export default Footer;
