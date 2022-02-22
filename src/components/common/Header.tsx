//dependencies
import React from "react";

//imports
import hamburger from "../../assets/hamburger.png";
import icon from "../../assets/icon.png";
import profile from "../../assets/profile.png";

type Props = {};

const Header: React.FC = () => {
  return (
    <div className="fixed flex items-center justify-between w-full top-1 px-4 flex">
      <img src={hamburger} alt="hamburger" className="w-6" />
      <img src={icon} alt="hamburger" className="w-14" />
      <img src={profile} alt="hamburger" className="w-7" />
    </div>
  );
};

export default Header;
