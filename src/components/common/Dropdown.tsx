//dependencies
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

type Option = {
  label: string;
  value: any;
};

type Props = {
  options: Option[];
  setValue: any;
  category?: string;
};

type ArrowProps = {
  onClick: any;
};

const Dropdown: React.FC<Props> = ({ options, category, setValue }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div style={{ borderRadius: "6px" }} className="relative shadow py-2" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center pr-4">
        <p className="ml-2">{category}</p>
        <DropDownArrow
          onClick={(e: any) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        />
      </div>
      {open ? <Options options={options} setValue={setValue} /> : null}
    </div>
  );
};

const Options: React.FC<Props> = ({ options, setValue }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ borderRadius: "6px" }}
      className="absolute w-full bg-white mt-4 flex flex-col justify-start max-h-44 overflow-auto shadow"
    >
      {options.map((option) => {
        return (
          <button
            key={nanoid()}
            className="text-left pl-2 mt-2 font-light"
            onClick={() => dispatch(setValue(option.value))}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

const DropDownArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: 0,
        height: 0,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderTop: "8px solid #000000",
      }}
    />
  );
};

export default Dropdown;
