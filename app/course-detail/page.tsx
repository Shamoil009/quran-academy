import CourseDetail from "@/components/CourseDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Header />
      <CourseDetail />
      <Footer/>
    </React.Fragment>
  );
};

export default page;
