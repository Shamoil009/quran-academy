import React from "react";

const page = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-4xl font-bold">Page not found</div>
      <div className="text-xl">
        Looks like page you{`'`}re trying to access is not available
      </div>
    </div>
  );
};

export default page;
