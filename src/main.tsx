import * as ReactDOM from "react-dom/client";
import "./index.css";
import ProviderConfig from "./tools/provider";
import Root from "./root";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>,
);
