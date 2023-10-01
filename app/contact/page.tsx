import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default page;
