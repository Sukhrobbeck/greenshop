import { useState, type FC, useEffect } from "react";
import { Product } from "../../../@types";
import axios from "axios";
import Card from "./Card";

const RelatedProducts: FC<Product> = ({ data }) => {
  const [relatedData, setRelatedData] = useState([]);
  const [category, setCategory] = useState(String(data?.category));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setCategory(String(data?.category));
  }, [data]);

  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://greenshop.abduvoitov.com/api/flower/category/${category}?access_token=64bebc1e2c6d3f056a8c85b7`,
          );
          setRelatedData(response.data.data);
        } catch (error) {
          console.log(error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [category]);

  return (
    <div className="overflow-hidden flex flex-col gap-[45px]">
      <div className="w-full border-b-2 border-[#46a358] py-3">
        <h1 className="text-green-500 text-[17px] font-bold">
          You may be interested in
        </h1>
      </div>
      <div className="w-full grid grid-cols-5 gap-6">
        {relatedData.map((value, index) => (
          <Card
            key={index}
            data={value}
            isLoading={isLoading}
            isError={isError}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

{
}
