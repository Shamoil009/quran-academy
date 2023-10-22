import Admin from "@/components/Admin";
import AuthGuard from "@/components/AuthGuard";
import React from "react";

const page = () => {
  return (
    <AuthGuard>
      <Admin />
    </AuthGuard>
  );
};

export default page;
