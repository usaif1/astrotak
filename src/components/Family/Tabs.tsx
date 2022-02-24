//dependencies
import React, { useState } from "react";

type Props = {};

const Tabs: React.FC = (props: Props) => {
  const [tab, setTab] = useState<string>("profile");
  const [profile, setProfile] = useState<string>("family");

  return (
    <>
      <div className="flex justify-between px-2 bg-white">
        <Tab label="My Profile" value="profile" onClick={() => setTab("profile")} tab={tab} />
        <Tab label="Order History" value="order" onClick={() => setTab("order")} tab={tab} />
      </div>
      <div className="flex justify-between mx-2 mt-3 bg-white">
        <Profiles label="Basic Profile" onClick={() => setProfile("basic")} value="basic" profile={profile} />
        <Profiles
          label="Friends and Family Profile"
          onClick={() => setProfile("family")}
          value="family"
          profile={profile}
        />
      </div>
    </>
  );
};

const Tab: React.FC<{ label: string; onClick?: any; value: string; tab: string }> = ({
  label,
  onClick,
  value,
  tab,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-center w-full pb-2  ${value === tab ? "border-b-2 border-lightOrange text-orange" : ""}`}
    >
      {label}
    </button>
  );
};

const Profiles: React.FC<{ label: string; onClick?: any; value: string; profile: string }> = ({
  label,
  onClick,
  value,
  profile,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ borderRadius: "6px" }}
      className={`text-center w-full text-sm py-3 ${value === profile ? "bg-orange text-white" : ""} `}
    >
      {label}
    </button>
  );
};

export default Tabs;
