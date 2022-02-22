//dependencies
import React from "react";

//imports
import PaymentButton from "./PaymentButton";

type Props = {};

const Wallet: React.FC = (props: Props) => {
  return (
    <div className="text-white bg-walletBlue py-4 px-4 font-bold">
      <div className="flex justify-between items-center">
        <p className="text-lg">Wallet Balance: ₹ 0</p>
        <PaymentButton fontSize="text-xs" fontWeight="font-medium" label="Add Money" />
      </div>
    </div>
  );
};

export default Wallet;
