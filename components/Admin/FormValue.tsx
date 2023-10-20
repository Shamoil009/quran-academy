import React from "react";

type Props = {
  fullName?: string;
  email?: string;
  number?: string;
  country?: string;
  courses?: string;
  approved?: boolean;
};

const FormValue = ({
  fullName,
  email,
  number,
  country,
  courses,
  approved,
}: Props) => {
  return (
    <tr className="border-t border-gray-300">
      <td className="break-words">{fullName}</td>
      <td>{email}</td>
      <td className="break-all">{number}</td>
      <td>{country}</td>
      <td>{courses}</td>
      <td className="flex justify-center">
        <button
          className={`${
            approved &&
            "border border-primaryColor bg-transparent text-primaryColor hover:bg-transparent"
          } btn-primary py-2 xl:py-3 2xl:py-4`}
          disabled={approved ? true : false}
        >
          {approved ? "approved" : "approve"}
        </button>

      </td>
    </tr>
  );
};

export default FormValue;
