import { useAxios } from "../../hooks/useAxios";
import { useNotificationAPI } from "../NotificationAPI";

export const useHandler = () => {
  const axios = useAxios();
  const notify = useNotificationAPI();

  const emailSubscriber = async ({ email }: { email: string }) => {
    try {
      await axios({
        url: "/features/email-subscribe",
        method: "POST",
        body: { email },
      });
      notify("email_success");
    } catch (error) {
      notify("smth_wrong");
    }
  };
  return { emailSubscriber };
};
