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
      <div className="navbar bg-brand-color text-primary-content z-50 shadow border-b-2">
        <em className="sticky top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,96L24,133.3C48,171,96,245,144,256C192,267,240,213,288,197.3C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,234.7C768,203,816,149,864,144C912,139,960,181,1008,192C1056,203,1104,181,1152,197.3C1200,213,1248,267,1296,288C1344,309,1392,299,1416,293.3L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
        </em>
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
