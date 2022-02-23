//dependencies
import React, { useEffect } from "react";

//imports
import { Wallet, PaymentFooter, Dropdown } from "components/common";

//redux
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "slices/questionSlice";

type Props = {};

type Option = {
  label: string;
  value: any;
};

const Questions: React.FC = (props: Props) => {
  const questionState = useSelector((state: RootState) => state.question);

  console.log(questionState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const optionsList: Option[] = questionState.questions.map((question) => {
    return {
      label: question.name,
      value: question.name,
    };
  });

  return (
    <div className="mt-16 relative">
      <Wallet />
      <PaymentFooter />
      <div className="pl-4">
        <p className="font-bold">Ask a Question</p>
        <p className="w-11/12 text-base font-light text-sm">
          Seek accurate answers to your life problems and get guidance towards the right path. Whether the problem is
          related to love, self, life, business, money, education or work, our astrologers will do an in-depth study of
          your birth chart to provide personalized responses along with remedies.
        </p>
      </div>
      <div className="pl-4 mt-2 w-11/12">
        <p className="font-bold mb-1">Choose Category</p>
        {questionState.loading ? <div> loading... </div> : <Dropdown options={optionsList} />}
      </div>
    </div>
  );
};

export default Questions;
