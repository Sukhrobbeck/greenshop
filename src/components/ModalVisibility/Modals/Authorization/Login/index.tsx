import { useState, type FC } from "react";
import { Divider, Form, Input } from "antd";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import {
  setAuthModal,
  setGoogleVerification,
} from "../../../../../redux/modalSlice";
import {
  FacebookFilled,
  GoogleOutlined,
  ScanOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { signInWithGoogle } from "../../../../../config";
import { useNotificationAPI } from "../../../../../generic/NotificationAPI";

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const signIn = useSignIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const notify = useNotificationAPI();

  const onFinishFn = (e: { email: string; password: string }) => {
    setIsLoading(true);
    axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-in",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
      method: "POST",
      data: e,
    })
      .then((res) => {
        signIn({
          token: res.data.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: res.data.data.user,
        });
        setIsLoading(false);
        dispatch(setAuthModal());
        notify("succefully_signed_in");
      })
      .catch(() => {
        setIsLoading(false);
        notify(409);
      });
  };

  const onGoogleAuth = async () => {
    const data = await signInWithGoogle();
    dispatch(setGoogleVerification());

    await axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-in/google",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
      data: {
        email: data.user.email,
      },
      method: "POST",
    }).then((res) => {
      signIn({
        token: res.data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });
    });
    dispatch(setGoogleVerification());
    dispatch(setAuthModal());
  };

  const unsupported_login_type = () => {
    notify("not_supported");
  };

  return (
    <div>
      <div>
        <h3 className="mt-8 text-center text-neutral-700 text-[13px] font-semibold">
          Enter your username and password to login.
        </h3>
        <div className="flex flex-col w-full items-center">
          <Form onFinish={onFinishFn} className="flex flex-col">
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
                className="w-[300px] h-[40px] mt-[14px] border-2 border-[#46A358] font-semibold"
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
                className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
                placeholder="*********"
                type="password"
              />
            </Form.Item>
            <h3 className="text-[#46A358] font-semibold cursor-pointer w-fit ml-auto">
              Forgot Password?
            </h3>
            <button
              type="submit"
              className="w-[300px] h-[45px] bg-[#46a358] mt-[17px] text-white text-base font-bold rounded-md"
            >
              {isLoading ? <LoadingOutlined /> : "Login"}
            </button>
          </Form>
          <div className="w-[300px] flex justify-center mt-3">
            <Divider>Or login with</Divider>
          </div>
          <div className="mt-[15px] flex flex-col gap-[15px] w-[300px] mb-5 text-3 font-bold">
            <button
              onClick={onGoogleAuth}
              className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md hover:text-[#46a358] transition-colors"
            >
              <>
                <GoogleOutlined className="pl-[15px]" />
                Login with Google
              </>
            </button>
            <button
              onClick={unsupported_login_type}
              className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md hover:text-[#46a358] transition-colors"
            >
              <>
                <FacebookFilled className="pl-[15px]" />
                Login with Facebook
              </>
            </button>
            <button
              onClick={unsupported_login_type}
              className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md hover:text-[#46a358] transition-colors"
            >
              <>
                <ScanOutlined className="pl-[15px]" />
                Login with QR code
              </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
