import React from "react";
import HeroSection from "../atoms/HeroSection";
import { useLocation } from "react-router-dom";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";

const PublicLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const location = useLocation();

  const renderChildren = () => {
    const isAuthRoute = AUTH_ROUTES.findIndex(
      (route) => route.path === location.pathname
    );
    if (isAuthRoute === -1) {
      return (
        <>
          <div className="max-h-[calc(100vh - 4rem)] overflow-auto">
            <HeroSection />
          </div>
          <div className="container">{children}</div>
        </>
      );
    }
    return <div className="mt-24">{children}</div>;
  };

  return <>{renderChildren()}</>;
};

export default PublicLayout;
