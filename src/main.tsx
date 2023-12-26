import * as ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import ProviderConfig from "./tools/provider";
import Home from "./components/Home";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProviderConfig>
    <Navbar />
    <Home />
  </ProviderConfig>,
);
