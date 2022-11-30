import { lazy } from "react";
import { Navigate } from "react-router-dom";
// 懒加载
const Home = lazy(() => import("@/views/home"));
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));
const route = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
];
export default route;
