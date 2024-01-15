import type { FC } from "react";
import { Divider, Form, Input, Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthModal } from "../../../../redux/modalSlice";
import {
  FacebookFilled,
  GoogleOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

const Authorization: FC = () => {
  const dispatch = useReduxDispatch();
  const { authModal } = useReduxSelector((state) => state.modal);
  const signIn = useSignIn();

  const onFinishFn = (e: { email: string; password: string }) => {
    console.log(e);
    axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-in",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
      method: "POST",
      data: e,
    }).then((res) => {
      console.log(res);
      signIn({
        token: res.data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });
    });
  };

  return (
    <Modal
      style={{ position: "relative" }}
      open={authModal}
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
    >
      <div className="">
        <div className="flex gap-2 mt-[11px] w-full justify-center text-xl font-semibold text-neutral-700 cursor-pointer transition-colors">
          <h1 className="hover:text-[#46a358] text-[#46a358]">Login</h1>|
          <h1 className="hover:text-[#46a358]">Register</h1>
        </div>
        <h3 className="mt-8 text-center text-neutral-700 text-[13px] font-semibold">
          Enter your username and password to login{" "}
        </h3>
        <div className="flex flex-col w-full items-center">
          <Form onFinish={onFinishFn}>
            <Form.Item
              name={"email"}
              rules={[
                {
                  message: "Please enter your email",
                  required: true,
                },
              ]}
            >
              <Input
                className="w-[300px] h-[40px] mt-[14px] border-2 border-[#46A358]"
                placeholder="almamun_uxui@outlook.com"
                type="email"
              />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                {
                  message: "Please enter your password",
                  required: true,
                },
              ]}
            >
              <Input.Password
                className="w-[300px] h-[40px] mt-[17px] border-2 border-[#46A358]"
                placeholder="*********"
                type="password"
              />
            </Form.Item>
            <h3 className="text-[#46A358] font-semibold mt-[14px] cursor-pointer w-fit ml-auto">
              Forgot Password?
            </h3>
            <button
              type="submit"
              className="w-[300px] h-[45px] bg-[#46a358] mt-[17px] text-white text-base font-bold rounded-md"
            >
              Login
            </button>
          </Form>
          <div className="w-[300px] flex justify-center mt-3">
            <Divider>Or login with</Divider>
          </div>
          <div className="mt-[15px] flex flex-col gap-[15px] w-[300px] mb-5">
            <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
              <FacebookFilled className="pl-[15px]" />
              Login with Facebook
            </button>
            <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
              <GoogleOutlined className="pl-[15px]" />
              Login with Google
            </button>
            <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
              <ScanOutlined className="pl-[15px]" />
              Login with Qr Code
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-2.5 bg-[#46a358] absolute bottom-0 left-0" />
    </Modal>
  );
};

export default Authorization;
