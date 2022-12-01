import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/theme";
import store from "@/store";
import App from "@/App";

import "normalize.css";
import "@/assets/css/index.less";

createRoot(document.getElementById("root")).render(
  // 异步加载路由
  <Suspense fallback="loading...">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
