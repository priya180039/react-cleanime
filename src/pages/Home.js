import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  useEffect(() => {
    const head = document.querySelector("title");
    head.textContent = "Cleanime";
  }, []);

  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
