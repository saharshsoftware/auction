import React from "react";
import FindAuction from "../molecules/FindAuction";

const AuctionLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <FindAuction />
      <div className="common-section">{children}</div>
    </>
  );
};

export default AuctionLayout;
