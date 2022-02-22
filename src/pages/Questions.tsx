//dependencies
import React from "react";

//imports
import { Wallet, PaymentFooter } from "components/common";

type Props = {};

const Questions: React.FC = (props: Props) => {
  return (
    <div className="mt-16 relative">
      <Wallet />
      <PaymentFooter />
    </div>
  );
};

export default Questions;
