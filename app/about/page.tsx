import About from "@/components/About";
import Layout from "@/components/Layout";
import Whatsapp from "@/components/Whatsapp";
import React from "react";

const page = () => {
  return (
    <Layout>
      <About />
      <Whatsapp/>
    </Layout>
  );
};

export default page;
