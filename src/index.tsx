import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
    <ParallaxProvider><Router/></ParallaxProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
