"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store/store";

// import { error } from "@/redux-store/auth/auth.selector";
import { allForm } from "@/redux-store/form/form.selector";
import { getAllForm } from "@/redux-store/form/form.slice";
import FormValue from "./FormValue";

const Admin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector(allForm);

  useEffect(() => {
    dispatch(getAllForm(1));
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* ---sidebar--- */}
      <div className="fixed h-screen w-[20%] border-r border-gray-400 px-2 pt-5">
        sidebar
      </div>
      {/* ---sidebar end--- */}
      <div className="w-[20%]" />
      <div className="w-[80%] px-3 py-5 text-xs xl:text-base 2xl:px-5 2xl:text-xl">
        <table className="w-full table-auto border-collapse ">
          <thead>
            <tr className=" bg-gray-300 text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Country</th>
              <th>Courses</th>
              <th>Approved</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((value: any, index: number) => {
              return (
                <FormValue
                  key={index}
                  fullName={value.fullName}
                  email={value.email}
                  number={value.number}
                  country={value.country}
                  courses={value.courses}
                  approved={value.approved}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
