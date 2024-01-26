import type { FC } from "react";
import { Product } from "../../../../@types";
import { Skeleton } from "antd";

const Description: FC<Product> = ({ data, isError, isLoading }) => {
  return (
    <div>
      {isLoading ?? isError ? (
        <Skeleton paragraph={{ rows: 8 }} />
      ) : (
        <div className="pb-[100px]">
          <div
            className="text-neutral-500 text-sm font-semibold leading-8"
            dangerouslySetInnerHTML={{ __html: String(data?.description) }}
          />
        </div>
      )}
    </div>
  );
};

export default Description;
