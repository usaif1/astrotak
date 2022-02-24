//dependencies
import React from "react";
import { Link } from "react-router-dom";

//imports
import hamburger from "../../assets/hamburger.png";
import icon from "../../assets/icon.png";
import profile from "../../assets/profile.png";

type Props = {
  path1?: string;
  path2?: string;
  path3?: string;
};

const Header: React.FC<Props> = ({ path1 = "/ask", path2 = "/ask", path3 = "/ask" }) => {
  return (
    <div className="fixed flex items-center justify-between w-full top-1 px-4 flex">
      <Link to={path1}>
        <img src={hamburger} alt="hamburger" className="w-6" />
      </Link>
      <Link to={path2}>
        <img src={icon} alt="icon" className="w-14" />
      </Link>
      <Link to={path3}>
        <img src={profile} alt="profile" className="w-7" />
      </Link>
    </div>
  );
};

export default Header;
