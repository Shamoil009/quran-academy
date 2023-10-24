import CourseDetail from "@/components/CourseDetail";
import Layout from "@/components/Layout";
import Whatsapp from "@/components/Whatsapp";
import React from "react";

const page = () => {
  return (
    <Layout>
      <CourseDetail />
      <Whatsapp/>
    </Layout>
  );
};

export default page;
