import type { FC } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

interface DataItemsType {
  discoount_up_to?: number;
  id?: number;
  poster_image_url?: string;
  title?: string;
}

const Discount: FC = () => {
  const [data, setData] = useState<DataItemsType>({});
  useEffect(() => {
    axios({
      url: "https://greenshop.abduvoitov.com/api/features/discount",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-5 bg-[#D9FAE0] pt-5">
      <h3 className="text-green-500 text-[35px] font-bold leading-[50px] text-center">
        {data.title}
      </h3>
      <p className="text-neutral-700 text-[23px] font-bold text-center">
        UP TO {data.discoount_up_to}% OFF
      </p>
      <img
        className="w-[100%]"
        src={data.poster_image_url}
        alt="poster image"
      />
    </div>
  );
};

export default Discount;
