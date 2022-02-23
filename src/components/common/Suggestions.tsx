//dependencies
import React from "react";
import { nanoid } from "nanoid";

//imports
import diamond from "assets/diamond.png";
import { highlights } from "extras/highlights";

type Props = {
  suggestions: string[];
};

const Suggestions: React.FC<Props> = ({ suggestions }) => {
  return (
    <div className="max-h-56 overflow-auto ">
      <p>Ideas what to ask (Select Any)</p>
      {suggestions.map((suggestion) => {
        return <Suggestion key={nanoid()} suggestion={suggestion} />;
      })}
      <p className="font-light text-sm">
        Seeking accurate answers to difficult questions troubling your mind? Ask credible astrologers to know what the
        future has in store for you
      </p>
      <Highlights />
    </div>
  );
};

const Suggestion: React.FC<{ suggestion: string }> = ({ suggestion }) => {
  return (
    <div className="flex items-center py-2 border-b border-lightGrey mb-2">
      <img
        src={diamond}
        alt="diamond"
        style={{ width: "16px", height: "15px", borderRadius: "10px" }}
        className="shadow"
      />
      <p className="pl-2 font-light">{suggestion}</p>
    </div>
  );
};

const Highlights: React.FC = () => {
  return (
    <div className="p-2 mt-2 bg-highlightOrangeBg">
      <ul className="list-disc list-inside w-11.4/12 text-highlightOrangeText">
        {highlights.map((highlight) => {
          return (
            <li key={nanoid()} className="text-sm mb-2">
              {highlight}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
