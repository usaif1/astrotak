//dpendencies
import React, { useState, useCallback, useRef, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { nanoid } from "nanoid";

//api
import { familyApi } from "api/family";

//redux
import { RootState } from "store";
import { updateLocations, showLoader, addFamilyMember } from "slices/familySlice";

type Props = {};

const AddFamilyForm: React.FC = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [dobDay, setDobDay] = useState<string>("");
  const [dobMonth, setDobMonth] = useState<string>("");
  const [dobYear, setDobYear] = useState<string>("");
  const [meridiem, setMeridiem] = useState<string>("");
  const [tobHH, setTobHH] = useState<string>("");
  const [tobMM, setTobMM] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [placeId, setPlaceId] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [relation, setRelation] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef<any>();

  const dispatch = useDispatch();
  const familyState = useSelector((state: RootState) => state.family);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(name, dobDay, dobMonth, dobYear, meridiem, tobHH, tobMM, place, gender, relation);
    const dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if (!name || !dobDay || !dobMonth || !dobYear || !meridiem || !tobHH || !tobMM || !place || !gender || !relation)
      return alert("Please fill in all required fields");

    if (`${dobDay}-${dobMonth}-${dobYear}`.match(dateReg)) {
      const body = {
        birthDetails: {
          dobDay: dobDay,
          dobMonth: dobMonth,
          dobYear: dobYear,
          tobHour: tobHH,
          tobMin: tobMM,
          meridiem: meridiem,
        },
        birthPlace: {
          placeName: place,
          placeId: placeId,
        },
        firstName: name,
        lastName: "Kumar",
        relationId: 10,
        gender: gender,
      };

      dispatch(addFamilyMember(body));
    } else return alert("Please enter valid date");
  };

  const getLocations = useCallback(
    _.debounce(async (location: string) => {
      const response = await familyApi.get("/location/place", {
        params: {
          inputPlace: location,
        },
      });
      dispatch(updateLocations(response.data.data));
    }, 500),
    []
  );

  const checkIfClickedOutside = (e: any) => {
    if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, []);

  return (
    <div className="mx-3">
      <div className="mt-4 w-full pl-4 flex items-center">
        <Link to="/ask">
          <ChevronLeftIcon fontSize="large" />
        </Link>
        <p className="text-xl ml-5 font-light">Add New Profile</p>
      </div>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-light mb-1">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="pl-2 py-2 border-2 border-gray-400"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label className="font-light mb-1" htmlFor="dob">
            Date of Birth
          </label>
          <div className="flex justify-between w-full">
            <input
              value={dobDay}
              onChange={(e) => setDobDay(e.target.value)}
              type="text"
              name="dobday"
              placeholder="DD"
              className="w-0.9/3 pl-2 py-2 border-2 border-gray-400"
              style={{ borderRadius: "4px" }}
            />
            <input
              value={dobMonth}
              onChange={(e) => setDobMonth(e.target.value)}
              type="text"
              placeholder="MM"
              name="dobmonth"
              className="w-0.9/3 pl-2 py-2 border-2 border-gray-400"
              style={{ borderRadius: "4px" }}
            />
            <input
              value={dobYear}
              onChange={(e) => setDobYear(e.target.value)}
              type="text"
              name="dobyear"
              placeholder="YYYY"
              className="w-0.9/3 pl-2 py-2 border-2 border-gray-400"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="tob" className="font-light mb-1">
            Time of Birth
          </label>
          <div className="flex justify-between items-center">
            <input
              value={tobHH}
              onChange={(e) => setTobHH(e.target.value)}
              type="text"
              name="name"
              placeholder="HH"
              className="pl-2 py-2 w-1/3 border-2 border-gray-400"
              style={{ borderRadius: "4px" }}
            />
            <input
              value={tobMM}
              onChange={(e) => setTobMM(e.target.value)}
              type="text"
              name="name"
              placeholder="MM"
              className="pl-2 py-2 w-1/3 border-2 border-gray-400"
              style={{ borderRadius: "4px" }}
            />
            <div className="flex items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMeridiem("AM");
                }}
                style={{ borderRadius: "4px" }}
                className={`py-2 px-2 ${meridiem === "AM" ? "text-white bg-blue-600" : "shadow"}`}
              >
                AM
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMeridiem("PM");
                }}
                style={{ borderRadius: "4px" }}
                className={`py-2 px-2 ${meridiem === "PM" ? "text-white bg-blue-600" : "shadow"}`}
              >
                PM
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col">
          <label htmlFor="name" className="font-light mb-1 mt-2">
            Place Of Birth
          </label>
          <input
            value={place}
            ref={dropdownRef}
            onChange={(e) => {
              dispatch(showLoader());
              getLocations(e.target.value);
              setPlace(e.target.value);
              setOpen(true);
            }}
            type="text"
            name="name"
            className="pl-2 py-2 border-2 border-gray-400"
            style={{ borderRadius: "4px" }}
          />
          {open ? (
            <div
              style={{ borderRadius: "4px" }}
              ref={dropdownRef}
              className={`absolute pl-2 py-1 top-20 w-full bg-white ${
                familyState.locations.length ? "border border-gray-200 shadow" : ""
              }`}
            >
              {familyState.loadingLocations ? (
                <div>Loading...</div>
              ) : (
                <>
                  {familyState.locations.map((location) => {
                    return (
                      <p
                        onClick={(e: any) => {
                          setPlace(location.placeName);
                          setPlaceId(location.placeId);
                          setOpen(false);
                        }}
                        key={nanoid()}
                        className="pl-2"
                      >
                        {location.placeName}
                      </p>
                    );
                  })}
                </>
              )}
            </div>
          ) : null}
        </div>
        <div className="mt-2 flex justify-between">
          <div className="w-full flex flex-col">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ borderRadius: "4px" }}
              className="bg-white px-2 py-2 border-2 border-gray-400"
            >
              <option value="null"></option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className="w-full flex flex-col ml-2">
            <label>Relation</label>
            <select
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              style={{ borderRadius: "4px" }}
              className="bg-white px-2 py-2 border-2 border-gray-400"
            >
              <option value="null"></option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
            </select>
          </div>
        </div>
        <div className="mt-4 mb-4 w-full flex justify-center">
          <button
            type="submit"
            style={{ borderRadius: "4px" }}
            className="bg-orange text-white text-sm font-light py-2 px-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFamilyForm;
