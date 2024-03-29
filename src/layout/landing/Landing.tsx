import React from "react";
import Header from "./header";
import Footer from "./footer";

const LandingLayout: LayoutFC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
