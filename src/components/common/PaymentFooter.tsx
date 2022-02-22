//dependencies
import React from "react";

//imports
import PaymentButton from "./PaymentButton";

type Props = {};

const PaymentFooter: React.FC = (props: Props) => {
  return (
    <div
      style={{ borderRadius: "6px" }}
      className="bg-walletBlue fixed w-full bottom-20 pl-2 pr-4 py-3 flex justify-between items-center"
    >
      <p className="text-white font-regular text-sm">₹ 150 ( 1 Question on Love )</p>
      <PaymentButton fontWeight="font-light" label="Ask Now" fontSize="text-sm" />
    </div>
  );
};

export default PaymentFooter;
