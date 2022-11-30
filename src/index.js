import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store";
import App from "@/App";

import "normalize.css";
import "@/assets/css/index.less";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 异步加载路由 */}
    <Suspense fallback="loading...">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);
