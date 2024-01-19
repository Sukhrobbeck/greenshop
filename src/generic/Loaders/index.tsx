import { Skeleton } from "antd";
import "../../index.css";

const useLoader = () => {
  const category_loader = (count?: number) => {
    count = count ?? 9;
    return Array.from({ length: count }).map((_, id) => (
      <div key={id} className="w-full pl-[30px] pr-[25px] mt-3">
        <Skeleton.Input active={true} block={true} />
      </div>
    ));
  };

  const discount_loader = () => {
    return (
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-green-500 text-[35px] font-bold leading-[50px] text-center">
          <Skeleton.Input active={true} />
        </h3>
        <p className="text-neutral-700 text-[23px] font-bold text-center mb-2">
          UP TO {<Skeleton.Button active={true} size="small" />}% OFF
        </p>
        <Skeleton.Image
          className="w-[250px]"
          active={true}
          style={{ width: "250px", height: "250px", marginBottom: "8px" }}
        />
      </div>
    );
  };

  const card_loader = () => {
    return Array.from({ length: 9 }).map((_, id) => (
      <div key={id}>
        <div>
          <Skeleton.Image
            active={true}
            style={{ width: "280px", height: "300px" }}
          />
        </div>
        <div className="mt-[12px] flex flex-col gap-1">
          <Skeleton.Input active={true} />
          <Skeleton.Input active={true} />
        </div>
      </div>
    ));
  };

  return {
    category_loader,
    discount_loader,
    card_loader,
  };
};

export default useLoader;
