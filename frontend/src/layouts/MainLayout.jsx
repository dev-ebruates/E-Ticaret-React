import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Proptypes from  "prop-types";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
//eslint hata olarak gösterdği için children in ne olduğunu tanımladık. hata gösterse bile tanımlamasak bile yapar ama yinede tamamladık
MainLayout.propTypes = {
  children: Proptypes.node
}
