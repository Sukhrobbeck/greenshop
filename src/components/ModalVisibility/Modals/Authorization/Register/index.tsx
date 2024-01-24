import { useState, type FC } from "react";
import { Divider, Form, Input } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { AuthResponseType } from "../../../../../@types";
import { useNotificationAPI } from "../../../../../generic/NotificationAPI";
import {
  setAuthModal,
  setGoogleAuthVisibility,
} from "../../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { signInWithGoogle } from "../../../../../config";
import { useAuthUserWithGoogle } from "../../../../../hooks/useQuery/useQueryAction";

interface userDataTypes {
  name: string;
  surname: string;
  password: string;
  confirm_password: string;
}

const Register: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sign_in = useSignIn();
  const notify = useNotificationAPI();
  const dispatch = useReduxDispatch();
  const { mutate } = useAuthUserWithGoogle();

  const registerFn = (e: userDataTypes) => {
    setIsLoading(true);
    if (e.password !== e.confirm_password) {
      notify("not_equal");
      setIsLoading(false);
    }
    axios({
      url: "https://greenshop.abduvoitov.com/api/user/sign-up",
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
      },
      method: "POST",
      data: { ...e },
    })
      .then((res) => {
        setIsLoading(false);
        const { data }: AuthResponseType = res.data;
        localStorage.setItem("token", data.token);
        sign_in({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });
        dispatch(setAuthModal());
        notify("succefully_registered");
      })
      .catch((res) => {
        const status = res.response.status;
        dispatch(setAuthModal());
        setIsLoading(false);
        return notify(status);
      });
  };

  const googleAuth = async () => {
    try {
      dispatch(setGoogleAuthVisibility(true));
      const result = await signInWithGoogle();
      mutate({
        email: String(result.user.email),
        type: "sign_up",
        name: String(result.user.displayName?.split(" ")[0]),
      });
      dispatch(setAuthModal());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pb-[10px] mt-8">
      <h3 className="mt-8 text-center text-neutral-700 text-[13px] font-semibold">
        Enter your email and password to register.
      </h3>
      <div className="flex flex-col w-full items-center mt-[14px]">
        <Form onFinish={registerFn} className="flex flex-col">
          <Form.Item
            name={"name"}
            rules={[
              {
                message: "Please, enter your name",
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Name"
              className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
              type="username"
            />
          </Form.Item>
          <Form.Item
            name={"surname"}
            rules={[
              {
                message: "Please, enter your surname",
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Surname"
              className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
              type="name"
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            rules={[
              {
                message: "Please, enter your email adress",
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Enter your email adress"
              className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[
              {
                message: "Please, enter your password",
                required: true,
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
              type="password"
            />
          </Form.Item>
          <Form.Item
            name={"confirm_password"}
            rules={[
              {
                message: "Please, confirm your password",
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Confirm password"
              className="w-[300px] h-[40px] border-2 border-[#46A358] font-semibold"
              type="password"
            />
          </Form.Item>
          <button
            type="submit"
            className="w-[300px] h-[45px] bg-[#46a358] mt-[17px] text-white text-base font-bold rounded-md"
          >
            {isLoading ? <LoadingOutlined /> : "Register"}
          </button>
        </Form>
        <div className="w-[300px] flex justify-center mt-3">
          <Divider>Or register with</Divider>
        </div>
        <div className="mt-[15px] flex flex-col gap-[15px] w-[300px] mb-5 text-3 font-bold">
          <button
            onClick={googleAuth}
            className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md hover:text-[#46a358] transition-colors"
          >
            <>
              <GoogleOutlined className="pl-[15px]" />
              Continue with Google
            </>
          </button>
          <button
            onClick={() => notify("not_supported")}
            className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md hover:text-[#46a358] transition-colors"
          >
            <>
              <FacebookFilled className="pl-[15px]" />
              Continue with Facebook
            </>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
