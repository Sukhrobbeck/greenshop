import { useReduxSelector } from "../../../../hooks/useRedux";
import { Modal, Spin } from "antd";

const GoogleVerification = () => {
  const { googleVerification } = useReduxSelector((state) => state.modal);
  return (
    <Modal
      open={googleVerification}
      footer={false}
      closable={false}
      title="Google Authentication"
    >
      <div className="w-full flex flex-col justify-center items-center gap-7 h-[190px]">
        <Spin size="large" />
        <h3 className="font-bold text-center">
          Authentication is on the proccess, please stand by while we are
          collecting your data...
        </h3>
      </div>
    </Modal>
  );
};

export default GoogleVerification;
