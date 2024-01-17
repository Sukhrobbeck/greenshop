import type { FC } from "react";
import Authorization from "./Modals/Authorization";
import GoogleVerification from "./Modals/GoogleVerification";

const ModalVisibility: FC = () => {
  return (
    <>
      <Authorization />
      <GoogleVerification />
    </>
  );
};

export default ModalVisibility;
