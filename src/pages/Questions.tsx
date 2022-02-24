//dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//imports
import { Wallet, PaymentFooter, Dropdown, Suggestions, Header, TabNavigator } from "components/common";

//redux
import { RootState } from "store";
import { fetchQuestions, setCategory } from "slices/questionSlice";

type Props = {};

type Option = {
  label: string;
  value: any;
};

const Questions: React.FC = (props: Props) => {
  const questionState = useSelector((state: RootState) => state.question);
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

  const selectedQuestion = questionState.questions.find((question) => {
    return question.name === questionState.category;
  });

  return (
    <>
      <Header path3="/family" />
      <div className="mt-16 relative">
        <Wallet />
        <PaymentFooter />
        <div className="pl-4 mt-2">
          <p className="font-bold">Ask a Question</p>
          <p className="w-11/12 text-base font-light text-sm">
            Seek accurate answers to your life problems and get guidance towards the right path. Whether the problem is
            related to love, self, life, business, money, education or work, our astrologers will do an in-depth study
            of your birth chart to provide personalized responses along with remedies.
          </p>
        </div>
        <div className="pl-4 mt-2 w-11/12">
          <p className="font-bold mb-1">Choose Category</p>
          {questionState.loading ? (
            <div> loading... </div>
          ) : (
            <Dropdown options={optionsList} setValue={setCategory} category={questionState.category} />
          )}
          <div className="mt-6">
            <textarea
              style={{ borderRadius: "4px" }}
              className="border-2 border-lightGrey w-full px-2 py-3 h-20"
              placeholder="Type a question here"
              maxLength={150}
            />
            <p className="w-full text-xs text-tabGrey text-right">wordcount</p>
          </div>
          <div>
            {selectedQuestion ? <Suggestions suggestions={selectedQuestion.suggestions} /> : <div>loading...</div>}
          </div>
        </div>
      </div>
      <TabNavigator />
    </>
  );
};

export default Questions;
