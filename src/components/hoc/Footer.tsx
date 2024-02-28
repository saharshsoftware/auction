import React from "react";
import { STRING_DATA } from "../../shared/Constants";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer p-4 bg-base-200 text-base-content ">
        <div className="flex lg:flex-row flex-col gap-4 items-center justify-center w-full">
          <span>
            © {new Date().getFullYear()} {STRING_DATA.BRAND_NAME} | All rights
            reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
