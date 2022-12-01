import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import Header from "@/components/header";
import routes from "@/router";
export default memo(() => (
  <div>
    <Header />
    <div>{useRoutes(routes)}</div>
    <div>footer</div>
  </div>
));
