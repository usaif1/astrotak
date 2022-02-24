//dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { openForm } from "slices/familySlice";

type Props = {};

const AddFamilyBtn: React.FC = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(openForm())}
      style={{ left: "35%", borderRadius: "6px" }}
      className="fixed bottom-16 text-sm font-regular bg-orange text-white p-2"
    >
      + Add New Profile
    </button>
  );
};

export default AddFamilyBtn;
