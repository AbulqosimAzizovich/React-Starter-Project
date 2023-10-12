import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
