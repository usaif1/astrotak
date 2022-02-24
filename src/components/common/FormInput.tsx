import React from "react";

type Props = {
  label: string;
  type: string;
  value: string | number;
  onChange: any;
};

const FormInput: React.FC<Props> = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-light mb-1">Name</label>
      <input
        type="text"
        className="py-2 border-2 border-gray-400"
        style={{ borderRadius: "4px" }}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
