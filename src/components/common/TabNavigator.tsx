//dependencies
import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

//imports
import home from "assets/home.png";
import ask from "assets/ask.svg";
import chat from "assets/chat.png";
import reports from "assets/reports.png";
import talk from "assets/talk.png";

type Props = {};

const tabs = [
  { img: home, alt: "home", to: "/ask", title: "Home", width: "w-6" },
  { img: talk, alt: "talk", to: "/ask", title: "Talk", width: "w-6" },
  { img: ask, alt: "ask", to: "/ask", title: "Ask Question", width: "w-6" },
  { img: reports, alt: "reports", to: "/ask", title: "Reports", width: "w-5" },
  { img: chat, alt: "chat", to: "/ask", title: "Chat", width: "w-6" },
];

const TabNavigator: React.FC = (props: Props) => {
  return (
    <div className="fixed bottom-4 flex items-baseline justify-between w-full px-4">
      {tabs.map((tab) => {
        return (
          <Link to={tab.to} key={nanoid()} className="flex flex-col justify-center items-center">
            <img src={tab.img} alt={tab.alt} className={tab.width} />
            <p className="text-xxs text-center text-tabGrey mt-1">{tab.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default TabNavigator;
