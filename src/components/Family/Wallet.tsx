//dependencies
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

type Props = {};

const Wallet: React.FC = (props: Props) => {
  return (
    <div style={{ background: "#E9EDFF", borderRadius: "6px" }} className="mt-3 mx-3 py-2 px-2 flex items-center">
      <AccountBalanceWalletIcon style={{ color: "#005EAD" }} />
      <p className="ml-2 text-sm text-blue-800 font-light">Wallet Balance: ₹ 0</p>
      <button
        style={{ borderRadius: "6px" }}
        className="ml-2 text-xs bg-white border border-black px-4 py-1 text-blue-800"
      >
        Add Money
      </button>
    </div>
  );
};

export default Wallet;
