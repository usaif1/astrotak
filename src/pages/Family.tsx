//dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

//imports
import { Header2 } from "components/common";
import { Tabs, Wallet, FamilyCard, AddFamilyBtn, AddFamilyForm } from "components/Family";

//redux
import { RootState } from "store";
import { fetchFamily } from "slices/familySlice";

type Props = {};

const Family: React.FC = (props: Props) => {
  const dispatch = useDispatch();
  const familyState = useSelector((state: RootState) => state.family);

  useEffect(() => {
    dispatch(fetchFamily());
  }, []);

  return (
    <div style={{ background: "#FDFDFD" }} className="w-full h-full">
      <Header2 />
      <div className="mt-14 relative"></div>
      <Tabs />
      {familyState.showForm ? <AddFamilyForm /> : <FamilyDetails />}
    </div>
  );
};

const FamilyDetails: React.FC = () => {
  const familyState = useSelector((state: RootState) => state.family);

  return (
    <>
      <Wallet />
      <div className="mt-4 mx-2">
        <div className="mx-3 mb-2 flex justify-between font-extralight text-sm w-8/12 text-blue-800">
          <p>Name</p>
          <p>DOB</p>
          <p>TOB</p>
          <p>Relation</p>
        </div>
        {familyState.loading ? (
          <div>loading..</div>
        ) : (
          familyState.members.map((member) => {
            return <FamilyCard key={nanoid()} member={member} />;
          })
        )}
      </div>
      <AddFamilyBtn />
    </>
  );
};

export default Family;
