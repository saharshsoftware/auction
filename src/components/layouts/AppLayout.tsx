import React from "react";
import Navbar from "../hoc/Navbar";
import { useLocation } from "react-router-dom";
import HeroSection from "../atoms/HeroSection";
import { ROUTE_CONSTANTS } from "../../shared/Routes";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";
import Footer from "../hoc/Footer";

const AppLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const location = useLocation();
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => route.path === location.pathname
  );

  const renderChildren = () => {
    if (location.pathname === ROUTE_CONSTANTS.DASHBOARD) {
      return (
        <>
          <HeroSection />
          <div className="container">{children}</div>
        </>
      );
    }
    return (
      <div
        className={`${
          isAuthRoute ? "flex-1 flex items-center justify-center" : ""
        } `}
      >
        {children}
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />

        {renderChildren()}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
