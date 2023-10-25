"use client";
import React, { useEffect, useState } from "react";
import { COURSES } from "@/constants/courses";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { useFormik } from "formik";
import { fillFormSchema } from "@/utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store/store";
import { createForm, messageCleanUp } from "@/redux-store/form/form.slice";
import {
  formActivityInProcess,
  formError,
  formSuccessMessage,
} from "@/redux-store/form/form.selector";
import SuccessPopup from "./SuccessPopup";
import Loader from "../Loader";

const ContactForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formMsg = useSelector(formSuccessMessage);
  const formErrorMsg = useSelector(formError);
  const loader = useSelector(formActivityInProcess);

  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const [selectedCourses, setSelectedCourses] = useState<any>([]);
  const [showPopup, setShowPopup] = useState(false);

  const convertArrayObjToString = (array: any) => {
    return array.map((obj: { name: any }) => obj.name).join(",");
  };

  const addCourseHandler = (name: string) => {
    const isColorSelected = selectedCourses.some(
      (color: any) => color.name === name,
    );

    if (isColorSelected) {
      const updatedColors = selectedCourses.filter(
        (color: any) => color.name !== name,
      );
      setSelectedCourses(updatedColors);
      setFieldValue("courses", convertArrayObjToString(updatedColors));
    } else {
      const updatedColors = [...selectedCourses, { name: name }];
      setSelectedCourses(updatedColors);
      setFieldValue("courses", convertArrayObjToString(updatedColors));
    }
  };

  const initialValues = {
    fullName: "",
    email: "",
    country: "",
    number: "",
    gender: "male",
    courses: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: fillFormSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      dispatch(createForm(values));
      console.log(selectedCourses);

      // action.resetForm(); //to remove entered values in a form
    },
  });

  const {
    values,
    errors,
    touched,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = Formik;

  useEffect(() => {
    if (formMsg === "form created") {
      setShowPopup(true);
      dispatch(messageCleanUp());
      resetForm();
    }
  }, [formMsg]);

  return (
    <div>
      <div className="flex h-[17rem] w-full flex-col justify-center bg-courseDetail bg-cover px-3 lg:h-[28rem] lg:px-10 xl:h-[30rem] 2xl:h-[34rem]">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl font-semibold text-primaryColor bg-blend-normal xl:text-3xl 2xl:text-5xl">
            Contact
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" flex flex-col items-center py-8 text-textPrimaryColor xl:py-10 2xl:py-16">
        <div className="w-[93%] border border-gray-200 bg-courseBgColor shadow-md xl:w-[80%] 2xl:w-[75%]">
          <div className="flex ">
            <div className="w-full px-3 py-5 lg:w-[70%] xl:px-5 xl:py-7 2xl:px-7 2xl:py-10">
              <h1 className="pb-5 text-lg font-semibold capitalize xl:pb-7 xl:text-xl 2xl:pb-10 2xl:text-3xl">
                Contact us
              </h1>
              <div className="space-y-6 text-sm md:text-base xl:space-y-8 xl:text-base 2xl:space-y-14 2xl:text-xl">
                {/* Name, email */}
                <div className="flex flex-col gap-x-7 gap-y-3 lg:flex-row">
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Name</div>
                    <input
                      type="text"
                      name="fullName"
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your name"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fullName && touched.fullName ? (
                      <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Email</div>
                    <input
                      type="text"
                      name="email"
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col gap-x-7 gap-y-3 lg:flex-row lg:items-end">
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Gender</div>
                    <select
                      name="gender"
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="Rather not say">Rather not say</option>
                    </select>
                    {errors.gender && touched.gender ? (
                      <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                        {errors.gender}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Country</div>
                    <input
                      type="text"
                      name="country"
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.country && touched.country ? (
                      <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                        {errors.country}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="font-medium">
                    Whatsapp No
                    <span className="text-xs lg:text-sm 2xl:text-base">
                      {" *"}
                      Provide a number whose whatsapp is available
                    </span>
                  </div>
                  <input
                    type="text"
                    name="number"
                    className="mt-2 border-b border-black bg-transparent p-2 outline-none"
                    placeholder="Your Whatsapp"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.number && touched.number ? (
                    <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                      {errors.number}
                    </p>
                  ) : null}
                </div>
                <div>
                  <div className="font-medium">Choose Course(s)</div>
                  <div className="grid grid-cols-1 pt-2 md:grid-cols-2">
                    {COURSES.map((value: any, index: number) => {
                      return (
                        <div key={index} className="flex gap-2 py-1">
                          <input
                            type="checkbox"
                            name={value.name}
                            className="accent-primaryColor"
                            defaultChecked={courseId == value.id}
                            onChange={() => addCourseHandler(value.name)}
                          />
                          <div className="min-w-fit">{value.name}</div>
                        </div>
                      );
                    })}
                    {errors.courses && touched.courses ? (
                      <p className="pt-3 text-xs text-red-600 2xl:text-sm">
                        {errors.courses}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              {formErrorMsg && (
                <div className=" pt-3 text-xs text-red-600 2xl:text-sm">
                  {formErrorMsg.message}
                </div>
              )}
              <div className="flex justify-center pt-2">
                <button
                  className="btn-primary my-3 rounded-md"
                  onClick={() => handleSubmit()}
                  disabled={loader}
                >
                  {loader ? <Loader /> : "Submit"}
                </button>
              </div>
              {showPopup && <SuccessPopup setShowPopup={setShowPopup} />}
            </div>

            {/* second half */}
            <div className="hidden w-[30%] bg-primaryColor px-2 py-5 text-sm text-gray-200 lg:block xl:px-4 xl:py-7 2xl:px-5 2xl:py-10 2xl:text-base">
              <div className="text-lg font-semibold xl:text-xl 2xl:text-3xl">
                Contact Information
              </div>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quam ea nesciunt commodi possimus aliquam cupiditate, tempore
                repudiandae qui modi? Nobis reprehenderit, veniam modi itaque
                magni temporibus laboriosam laudantium corporis!
              </p>
              <div className="space-y-2 pt-2 tracking-wide lg:pt-4 2xl:space-y-4 2xl:pt-7 2xl:tracking-wider">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 lg:w-5" />
                  Aqquranacademy.org@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="w-4  lg:w-5" />
                  +92 348 154 8861
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 lg:w-5" />
                  +1 202 773 5409
                </div>
                <div className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faMap} className="mt-1 w-4 lg:w-5" />
                  <div className="w-[50%] lg:w-72">
                    Office No. 09, Al.imran Plaza Near Umania Restaurant Dhok
                    Jelani, Bhara Kahu, Islamabad, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---detail section end */}
    </div>
  );
};

export default ContactForm;
