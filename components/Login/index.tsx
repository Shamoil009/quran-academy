"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store/store";
import authSlice, {
  loginUser,
  messageCleanUp,
} from "@/redux-store/auth/auth.slice";
import { error, loginSuccessMessage } from "@/redux-store/auth/auth.selector";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const message = useSelector(loginSuccessMessage);
  const loginError = useSelector(error);
  const [form, setForm] = useState({ email: "", password: "" });

  const formChangeHandler = (event: any) => {
    setForm((preState: any) => {
      return { ...preState, [event.target.name]: event.target.value };
    });
    console.log(form);
  };

  const submitHandler = () => {
    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (message === "login successful") {
      console.log(message);
      router.push("/admin");
      dispatch(messageCleanUp());
    }
  }, [message]);

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
            onChange={formChangeHandler}
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
        </div>
        <div className="pt-5 xl:pt-8">
          <div>Password</div>
          <input
            type="text"
            name="password"
            onChange={formChangeHandler}
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
        </div>
        {message && (
          <div className="pt-3 text-xs 2xl:text-sm text-green-600">{message}</div>
        )}
        {loginError && (
          <div className="pt-3 text-xs 2xl:text-sm text-red-600">{loginError.message}</div>
        )}
        <div className="flex justify-center pt-5 xl:pt-8">
          <button className=" btn-primary" onClick={submitHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
