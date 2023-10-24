import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import Whatsapp from "@/components/Whatsapp";
import React from "react";

const page = () => {
  return (
    <Layout>
      <ContactForm />
      <Whatsapp/>
    </Layout>
  );
};

export default page;
