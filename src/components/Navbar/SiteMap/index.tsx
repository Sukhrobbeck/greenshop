import type { FC } from "react";
import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setSiteMapVisibility } from "../../../redux/modalSlice";

const SiteMap: FC = () => {
  const hover_style: string =
    "hover:border-l-4 hover:border-[#46a358] hover:text-[#46a358] hover:pl-2 transition ease-out duration-150";
  const { siteMapvisibility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();

  return (
    <Modal
      onCancel={() => dispatch(setSiteMapVisibility())}
      footer={false}
      open={siteMapvisibility}
      title="SiteMap"
    >
      <div className="flex flex-col gap-2 ease-customCubic">
        <h3
          className={`font-bold cursor-pointer transition-colors ${hover_style}`}
        >
          Home
        </h3>
        <h3
          className={`font-bold cursor-pointer transition-colors ${hover_style}`}
        >
          Blog
        </h3>
      </div>
    </Modal>
  );
};

export default SiteMap;
