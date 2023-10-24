import React from "react";
import Courses from "@/components/Courses";
import Layout from "@/components/Layout";
import Whatsapp from "@/components/Whatsapp";

const page = () => {
  return (
    <Layout>
      <Courses />
      <Whatsapp/>
    </Layout>
  );
};

export default page;
