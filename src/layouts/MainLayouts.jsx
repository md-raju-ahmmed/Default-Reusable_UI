import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
// import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Outlet/>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayouts;
