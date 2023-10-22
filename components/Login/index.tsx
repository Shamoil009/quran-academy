"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store/store";
import {
  errorCleanUp,
  loginUser,
  messageCleanUp,
} from "@/redux-store/auth/auth.slice";
import {
  activityInProcess,
  error,
  loginSuccessMessage,
} from "@/redux-store/auth/auth.selector";
import { useRouter } from "next/navigation";
import Loader from "../Loader";
import { loginSchema } from "@/utils/validation";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const message = useSelector(loginSuccessMessage);
  const loader = useSelector(activityInProcess);
  const loginError = useSelector(error);

  const initialValues = {
    email: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      dispatch(loginUser(values));
      action.resetForm(); //to remove entered values in a form
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    Formik;

  useEffect(() => {
    if (message === "login successful") {
      console.log(message);
      router.push("/admin");
      dispatch(messageCleanUp());
    }
  }, [message]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(errorCleanUp());
    }, 6000);
  }, [loginError]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-[50%] rounded-sm bg-white px-8  py-10 text-base font-medium xl:w-[40%] xl:py-14 xl:text-lg 2xl:w-[35%] 2xl:py-20 2xl:text-xl">
        <div className="text-center text-2xl font-bold xl:text-3xl 2xl:text-4xl">
          Admin
        </div>
        <div className="pt-5 xl:pt-8">
          <div>Email</div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
          {errors.email && touched.email ? (
            <p className="pt-3 text-xs text-red-600 2xl:text-sm">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="pt-5 xl:pt-8">
          <div>Password</div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
          {errors.password && touched.password ? (
            <p className="pt-3 text-xs text-red-600 2xl:text-sm">
              {errors.password}
            </p>
          ) : null}
        </div>
        {message && (
          <div className="pt-3 text-xs text-green-600 2xl:text-sm">
            {message}
          </div>
        )}
        {loginError && (
          <div className="pt-3 text-xs text-red-600 2xl:text-sm">
            {loginError.message}
          </div>
        )}
        <div className="flex justify-center pt-5 xl:pt-8">
          <button
            className=" btn-primary"
            onClick={() => handleSubmit()}
            disabled={loader}
          >
            {loader ? <Loader /> : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
