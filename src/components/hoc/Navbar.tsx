import React from "react";
import { STRING_DATA } from "../../shared/Constants";
import ActionButton from "../atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../shared/Routes";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-primary text-primary-content fixed top-0 z-50 min-h-24">
      <div className="flex flex-row items-center justify-between px-4 w-full">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate(ROUTE_CONSTANTS.DASHBOARD)}
        >
          {STRING_DATA.BRAND_NAME}
        </div>
        <div className="flex items-center gap-4">
          <ActionButton
            text={STRING_DATA.REGISTER}
            onclick={() => navigate(ROUTE_CONSTANTS.REGISTER)}
          />
          <ActionButton
            text={STRING_DATA.LOGIN}
            onclick={() => navigate(ROUTE_CONSTANTS.LOGIN)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
