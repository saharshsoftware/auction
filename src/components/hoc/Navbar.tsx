import React, { useState, useEffect } from "react";
import { NAV_LINKS, STRING_DATA } from "../../shared/Constants";
import ActionButton from "../atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../shared/Routes";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState({
    mobileView: false,
    isOpenTopbar: false,
  });

  const handleResize = () => {
    setIsMobileView((prev) => ({
      ...prev,
      mobileView: window.innerWidth < 768,
    })); // Assuming mobile view below 768px width
  };
  useEffect(() => {
    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTopBar = () => {
    setIsMobileView((prev) => ({
      ...prev,
      isOpenTopbar: !prev.isOpenTopbar,
    }));
  };

  const handleRouteClick = (path: string) => {
    // setIsMobileView((prev) => !prev);
    toggleTopBar();
    if (path) {
      navigate(path);
      return;
    }
    navigate(ROUTE_CONSTANTS.DASHBOARD);
  };

  const renderNavlink = () => {
    return (
      <ul
        className={
          isMobileView.mobileView && isMobileView.isOpenTopbar
            ? "lg:hidden"
            : "lg:flex hidden items-center gap-4 justify-between"
        }
      >
        {NAV_LINKS.map((item, index) => (
          <li key={index}>{item?.label}</li>
        ))}
      </ul>
    );
  };

  const renderMobileMenu = () => {
    if (isMobileView.mobileView && isMobileView.isOpenTopbar) {
      return (
        <div className="relative z-50 w-full">
          <div className="lg:hidden flex flex-col items-center gap-4 fixed w-full top-0 bg-white py-2 shadow">
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={toggleTopBar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {NAV_LINKS.map((item, index) => (
              <div
                className="nav-link-class"
                key={index}
                onClick={() => handleRouteClick(item?.path)}
              >
                {item?.label}
              </div>
            ))}
            <div
              className="nav-link-class"
              onClick={() => handleRouteClick(ROUTE_CONSTANTS.REGISTER)}
            >
              {STRING_DATA.REGISTER}
            </div>
            <div
              className="nav-link-class"
              onClick={() => handleRouteClick(ROUTE_CONSTANTS.LOGIN)}
            >
              {STRING_DATA.LOGIN}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="navbar bg-brand-color text-primary-content fixed top-0 z-50 min-h-24">
        <div className="flex flex-row items-center justify-between px-4 w-full">
          <div className="flex gap-8">
            <div
              className="text-xl font-bold cursor-pointer text-white"
              onClick={() => navigate(ROUTE_CONSTANTS.DASHBOARD)}
            >
              {STRING_DATA.BRAND_NAME}
            </div>
            {renderNavlink()}
          </div>
          <div className="lg:flex hidden items-center gap-4">
            <ActionButton
              text={STRING_DATA.REGISTER}
              onclick={() => navigate(ROUTE_CONSTANTS.REGISTER)}
            />
            <ActionButton
              text={STRING_DATA.LOGIN}
              onclick={() => navigate(ROUTE_CONSTANTS.LOGIN)}
            />
          </div>

          <div className="lg:hidden cursor-pointer" onClick={toggleTopBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
      </div>
      {renderMobileMenu()}
    </>
  );
};

export default Navbar;
