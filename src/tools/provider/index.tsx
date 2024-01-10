import { type FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "../../redux";

interface ProviderType {
  children: React.ReactNode;
}

const ProviderConfig: FC<ProviderType> = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default ProviderConfig;
