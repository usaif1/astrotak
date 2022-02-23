//dependencies
import React from "react";

type Props = {
  fontSize?: string;
  fontWeight?: string;
  label: string;
};

const PaymentButton: React.FC<Props> = ({ fontSize = "text-xs", fontWeight = "font-normal", label }) => {
  return (
    <button
      style={{ borderRadius: "4px" }}
      className={`bg-white border border-black text-walletBlue ${fontSize} ${fontWeight} px-4 py-1`}
    >
      {label}
    </button>
  );
};

export default PaymentButton;
