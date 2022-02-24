//dependencies
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  member: any;
};

const FamilyCard: React.FC<Props> = ({ member }) => {
  return (
    <div
      style={{ borderRadius: "4px" }}
      className="w-full py-3 px-2 flex justify-between items-center text-xs font-light border-2 border-gray-300 shadow mb-4"
    >
      <p>{member.firstName}</p>
      <p>{`${member.birthDetails.dobDay}-${member.birthDetails.dobMonth}-${member.birthDetails.dobYear}`}</p>
      <p>{`${member.birthDetails.tobHour}:${member.birthDetails.tobMin}`}</p>
      <p style={{ maxWidth: "4rem" }}>{member.relation}</p>
      <div className="flex">
        <EditIcon style={{ color: "red" }} />
        <DeleteIcon style={{ color: "red" }} className="ml-6" />
      </div>
    </div>
  );
};

export default FamilyCard;
