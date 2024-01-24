import { useAxios } from "../../useAxios";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useReduxDispatch } from "../../useRedux";
import { useSignIn } from "react-auth-kit";
import { useMutation } from "react-query";
import { AuthResponseType } from "../../../@types";
import { setGoogleAuthVisibility } from "../../../redux/modalSlice";

const useAuthUserWithGoogle = () => {
  const notify = useNotificationAPI();
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const sing_in = useSignIn();

  return useMutation(
    ({
      email,
      type = "sign_in",
      name = " ",
      surname = " ",
    }: {
      email: string;
      type?: "sign_in" | "sign_up";
      name?: string;
      surname?: string;
    }) => {
      return axios({
        url: `/user/sign-${type === "sign_up" ? "up" : "in"}/google`,
        method: "POST",
        body: {
          email,
          name,
          surname,
        },
      })
        .then((res) => {
          const { data }: AuthResponseType = res.data;
          localStorage.setItem("token", data.token);
          sing_in({
            token: data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: data.user,
          });
          dispatch(setGoogleAuthVisibility(false));
          notify("google_auth_success");
        })
        .catch((error) => {
          dispatch(setGoogleAuthVisibility(false));
          const status = error.response.status;
          return notify(status);
        });
    },
  );
};

export { useAuthUserWithGoogle };
