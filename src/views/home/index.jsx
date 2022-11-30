import React, { memo, useEffect } from "react";
import XYRequest from "@/services";
const Home = memo(() => {
  useEffect(() => {
    XYRequest.get({ url: "/home/highscore" }).then((res) => console.log(res));
  }, []);
  return <div>Home</div>;
});

export default Home;
