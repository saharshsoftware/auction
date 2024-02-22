import React from "react";
import Navbar from "../hoc/Navbar";
import { useLocation } from "react-router-dom";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";
import HeroSection from "../atoms/HeroSection";

const AppLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const location = useLocation();

  const renderChildren = () => {
    const isAuthRoute = AUTH_ROUTES.some(
      (route) => route.path === location.pathname
    );

    if (!isAuthRoute) {
      return (
        <>
          <div className="">
            <HeroSection />
          </div>
          <div className="container">{children}</div>
        </>
      );
    }
    return (
      <div className="flex-1 flex items-center justify-center">{children}</div>
    );
  };
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        {renderChildren()}
      </div>
    </>
  );
};

export default AppLayout;
