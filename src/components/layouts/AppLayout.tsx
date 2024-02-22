import React from "react";
import Navbar from "../hoc/Navbar";
import { useLocation } from "react-router-dom";
import HeroSection from "../atoms/HeroSection";
import { ROUTE_CONSTANTS } from "../../shared/Routes";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";

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
    return children;
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div
          className={`mt-16 ${
            isAuthRoute ? "flex-1 flex items-center justify-center" : ""
          } `}
        >
          {renderChildren()}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
