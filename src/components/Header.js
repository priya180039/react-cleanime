import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/cleanime-logo.png";
import logo_h from "../assets/cleanime-hover.png";

const Header = () => {
  return (
    <div className="flex w-full text-gray-200 text-xl justify-between px-10 py-4">
      <div className="logo-container hover:cursor-pointer">
        <img src={logo} width="150" className="logo-1" />
        <img src={logo_h} width="150" className="logo-2" />
      </div>
      <div className="font-nunito">
        <NavLink className="px-4 hover:text-sky-500">Home</NavLink>
        <NavLink className="px-4 hover:text-sky-500">Dashboard</NavLink>
        <NavLink className="px-4 hover:text-sky-500">Sign In</NavLink>
      </div>
    </div>
  );
};

export default Header;
