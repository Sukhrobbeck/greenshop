import type { FC } from "react";
import SignIn from "./Login";
import Register from "./Register";
import { Modal } from "antd";
import { useReduxSelector, useReduxDispatch } from "../../../../hooks/useRedux";
import {
  setAuthModal,
  setActiveSignInMethod,
} from "../../../../redux/modalSlice";

const Authorization: FC = () => {
  const { authModal } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const { activeSignInMethod } = useReduxSelector((state) => state.modal);

  const active_style = ["text-[#46a358]"];

  return (
    <Modal
      style={{ position: "relative" }}
      open={authModal}
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
    >
      <div className="flex gap-3 mt-[21px] w-full justify-center items-center text-xl font-semibold text-neutral-700 cursor-pointer transition-colors">
        <h1
          className={`hover:text-[#46a358] ${
            activeSignInMethod === "signIn" ? active_style : ""
          }`}
          onClick={() => dispatch(setActiveSignInMethod({ payload: "signIn" }))}
        >
          Login
        </h1>
        <p className="text-neutral-700 text-lg font-normal font-['Inter'] leading-none">
          |
        </p>
        <h1
          className={`hover:text-[#46a358] ${
            activeSignInMethod === "signUp" ? active_style : ""
          }`}
          onClick={() => dispatch(setActiveSignInMethod({ payload: "signUp" }))}
        >
          Register
        </h1>
      </div>
      {activeSignInMethod === "signIn" ? <SignIn /> : <Register />}
      <div className="w-full h-2.5 bg-[#46a358] absolute bottom-0 left-0" />
    </Modal>
  );
};

export default Authorization;
