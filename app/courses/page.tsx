import React from "react";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const page = () => {
  return (
    <React.Fragment>
      <Header />
      <Courses />
      <Footer />
    </React.Fragment>
  );
};

export default page;
