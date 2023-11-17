import React, { useEffect } from "react";
import { getAllAnime } from "../api/Api";

const Main = () => {
  useEffect(() => {
    getAllAnime();
  }, []);
  return <div>Main</div>;
};

export default Main;
