//dependencies
import React from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//imports
import icon from "../../assets/icon.png";

type Props = {
  path1?: string;
  path2?: string;
  logout?: any;
};

const Header2: React.FC<Props> = ({ path1 = "/ask", path2 = "/ask", logout = () => null }) => {
  return (
    <div className="fixed flex items-center justify-between w-full top-0 px-4 flex bg-white">
      <Link to={path1}>
        <ChevronLeftIcon style={{ color: "orange" }} />
      </Link>
      <Link to={path2}>
        <img src={icon} alt="icon" className="w-14 ml-8" />
      </Link>
      <button
        onClick={logout}
        style={{ borderRadius: "6px" }}
        className="border-2 border-lightOrange px-2 py-1 text-xs text-highlightOrangeText"
      >
        Logout
      </button>
    </div>
  );
};

export default Header2;
