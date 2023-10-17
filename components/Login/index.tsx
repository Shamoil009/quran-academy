import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-[50%] xl:w-[40%] 2xl:w-[35%] rounded-sm  px-8 py-10 bg-white xl:py-14 2xl:py-20 text-base xl:text-lg 2xl:text-xl font-medium">
        <div className="text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold">Admin</div>
        <div className="pt-5 xl:pt-8">
          <div>Email</div>
          <input
            type="email"
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
        </div>
        <div className="pt-5 xl:pt-8">
          <div>Password</div>
          <input
            type="text"
            className="mt-1 w-full border-b border-black bg-transparent p-2 outline-none"
          />
        </div>
        <div className="flex justify-center pt-5 xl:pt-8">
          <button className=" btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
