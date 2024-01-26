import type { FC } from "react";
import { Result } from "antd";

const Reviews: FC = () => {
  return (
    <div className="pb-[100px]">
      <Result
        status={404}
        title="Information is missing!"
        subTitle="Looks like no one left a review on this product."
        className="font-semibold"
      />
    </div>
  );
};

export default Reviews;
