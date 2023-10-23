import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-store/store";

import { getAllForm, updateForm } from "@/redux-store/form/form.slice";

type Props = {
  id: number;
  fullName?: string;
  email?: string;
  number?: string;
  country?: string;
  courses?: string;
  approved?: boolean;
  page?: any;
};

const FormValue = ({
  id,
  fullName,
  email,
  number,
  country,
  courses,
  approved,
  page,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const approveHandler = (id: number) => {
    dispatch(updateForm(id)).then(() => {
      dispatch(getAllForm(page));
    });
    console.log(id);
  };
  const dataArray = courses?.split(",");

  // Now, dataArray contains the individual items as elements of an array
  console.log(dataArray);

  return (
    <tr className="border-t border-gray-300">
      <td className="break-words">{fullName}</td>
      <td>{email}</td>
      <td className="break-all">{number}</td>
      <td>{country}</td>
      {/* <td >{courses}</td> */}
      <td>
        <ol>
          {dataArray?.map((value: any, index: number) => {
            return <li key={index}>{value}</li>;
          })}
        </ol>
      </td>
      <td>
        <div className="flex w-full justify-center">
          <button
            onClick={() => approveHandler(id)}
            className={`${
              approved &&
              "border border-primaryColor bg-transparent text-primaryColor hover:bg-transparent"
            } btn-primary py-2 xl:py-3 2xl:py-4`}
            disabled={approved ? true : false}
          >
            {approved ? "approved" : "approve"}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FormValue;
