import axios from "axios";
import type { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ImageGalery from "./ImageGalery";
import ShopNavigator from "./ShopNavigator";
import ShortDescription from "./ShortDescription";
import FullDescription from "./FullDescription";
import Footer from "../Footer";
import RelatedProducts from "./RelatedProducts";

const Shop: FC = () => {
  const { category, _id } = useParams();

  const { data, isLoading, isError } = useQuery(
    [category, _id],
    () =>
      axios({
        url: `https://greenshop.abduvoitov.com/api/flower/category/${category}/${_id}?access_token=64bebc1e2c6d3f056a8c85b7`,
        method: "GET",
      }).then((res) => res.data.data),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[80%] h-full">
        <ShopNavigator />
      </div>
      <div className="w-[80%] h-full pb-[100px] flex gap-[55px]">
        <ImageGalery {...data} isLoading={isLoading} isError={isError} />
        <ShortDescription data={data} isLoading={isLoading} isError={isError} />
      </div>
      <div className="w-[80%] max-[400px]:w-[95%]">
        <FullDescription data={data} isLoading={isLoading} isError={isError} />
        <RelatedProducts data={data} />
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
