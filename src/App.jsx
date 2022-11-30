import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router";
export default memo(() => (
  <div>
    <div>header</div>
    <div>{useRoutes(routes)}</div>
    <div>footer</div>
  </div>
));
