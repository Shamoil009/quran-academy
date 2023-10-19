import React from "react";
import Header from "../Header";
import Footer from "../Footer";

type PropsType = {
  children?: any;
};

export default function Layout({ children }: PropsType) {
  return (
    <React.Fragment>
      <Header />
      <div className="min-h-[100dvh]">{children}</div>
      <Footer />
    </React.Fragment>
  );
}
