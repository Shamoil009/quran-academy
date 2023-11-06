"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store/store";

import {
  allForm,
  count,
  formActivityInProcess,
  numberOfPages,
} from "@/redux-store/form/form.selector";
import { formsCleanUp, getAllForm } from "@/redux-store/form/form.slice";
import FormValue from "./FormValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { QA_TOKEN } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Loader from "../Loader";

const Admin = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector(allForm);
  const loader = useSelector(formActivityInProcess);
  let pages = useSelector(numberOfPages) || 0;
  let records = useSelector(count) || 0;

  const [activePage, setActivePage] = useState(1);
  const [pageValue, setPageValue] = useState({
    start: 1,
    second: 2,
    end: 3,
  });

  const incrementPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start + 1,
      second: pageValue.second + 1,
      end: pageValue.end + 1,
    });
  };
  const decrementPageHandler = () => {
    setPageValue({
      ...pageValue,
      start: pageValue.start - 1,
      second: pageValue.second - 1,
      end: pageValue.end - 1,
    });
  };

  const onPageClickHandler = (pageNumber: any) => {
    dispatch(formsCleanUp());
    dispatch(getAllForm(pageNumber));
    setActivePage(pageNumber);
  };

  const logoutHandler = () => {
    localStorage.removeItem(QA_TOKEN);
    dispatch(formsCleanUp());
    router.push("/login");
  };

  useEffect(() => {
    dispatch(formsCleanUp());
    dispatch(getAllForm(activePage));
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* ---sidebar--- */}
      {/* <div className="fixed h-screen w-[20%] border-r border-gray-400 px-2 pt-5">
        sidebar
      </div> */}
      {/* ---sidebar end--- */}
      {/* <div className="w-[20%]" /> */}
      <div className="w-[100%] px-3 py-5 text-xs xl:text-base 2xl:px-5 2xl:text-xl">
        <div className="flex justify-end py-4">
          <button className="btn-black-and-white" onClick={logoutHandler}>
            Logout
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className=" bg-gray-300 text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Country</th>
              <th>Courses</th>
              <th>Date</th>
              <th>Approved</th>
            </tr>
          </thead>
          <tbody>
            {
              formData.map((value: any, index: number) => {
                return (
                  <FormValue
                    key={index}
                    id={value.id}
                    fullName={value.fullName}
                    email={value.email}
                    number={value.number}
                    country={value.country}
                    courses={value.courses}
                    approved={value.approved}
                    createdAt={value.createdAt}
                    page={activePage}
                  />
                );
              })}
          </tbody>
        </table>
        {loader && formData.length === 0 && (
          <div className="py-4">
            <Loader />
          </div>
        )}
        {/* pagination numbers */}
        {formData && formData.length > 0 && (
          <div className="m-auto mt-8 flex w-full flex-col items-center gap-4 px-[10%] py-5 sm:justify-center md:flex-row md:justify-between">
            <div className="">
              <p className="text-xs font-medium lg:text-sm 2xl:text-base">
                {formData &&
                  `Showing 
                      ${Math.min(records, 10 * activePage)} of ${records}`}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1 2xl:gap-2">
              <button
                onClick={decrementPageHandler}
                disabled={pageValue.start <= 1 ? true : false}
                className={
                  pageValue.start <= 1
                    ? "mr-1 rounded-md border bg-[#CCCCCC] px-2 py-1 text-[#666666] md:px-5 md:py-2"
                    : "md:text-md mr-1 rounded-md bg-primaryColor px-2 py-1 text-sm font-bold text-white md:px-5 md:py-2"
                }
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                disabled={pageValue.start > pages ? true : false}
                className={`${
                  pageValue.start === activePage
                    ? " bg-primaryColor text-white "
                    : pageValue.start > pages
                    ? " bg-[#CCCCCC]  text-[#666666] "
                    : " bg-white text-black hover:bg-primaryColor hover:text-white"
                } mr-2 rounded-md border px-2 py-1 md:px-5 md:py-2`}
                onClick={() => onPageClickHandler(pageValue.start)}
              >
                {pageValue.start}
              </button>
              <button
                disabled={pageValue.second > pages ? true : false}
                className={`${
                  pageValue.second === activePage
                    ? " bg-primaryColor text-white"
                    : pageValue.second > pages
                    ? " bg-[#CCCCCC] text-[#666666] "
                    : " bg-white text-black hover:bg-primaryColor hover:text-white"
                } mr-2 rounded-md border px-2 py-1 md:px-5 md:py-2`}
                onClick={() => onPageClickHandler(pageValue.second)}
              >
                {pageValue.second}
              </button>
              <button
                disabled={pageValue.end > pages ? true : false}
                className={`${
                  pageValue.end === activePage
                    ? "bg-primaryColor text-white"
                    : pageValue.end > pages
                    ? "border bg-[#CCCCCC] text-[#666666]"
                    : "bg-white text-black hover:bg-primaryColor hover:text-white"
                } mr-1 rounded-md border px-2 py-1 md:px-5 md:py-2`}
                onClick={() => onPageClickHandler(pageValue.end)}
              >
                {pageValue.end}
              </button>
              <button
                onClick={incrementPageHandler}
                disabled={pageValue.end >= pages ? true : false}
                className={`${
                  pageValue.end >= pages
                    ? "mr-1 border bg-[#CCCCCC] text-[#666666]"
                    : "md:text-md mr-1 bg-primaryColor text-sm font-bold text-white"
                } mr-2 rounded-md border px-2 py-1 md:px-5 md:py-2`}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        )}
        {/* ------pagination end */}
      </div>
    </div>
  );
};

export default Admin;
