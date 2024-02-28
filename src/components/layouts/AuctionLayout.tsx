import React from "react";
import FindAuction from "../molecules/FindAuction";

const AuctionLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <FindAuction />
      <div className="common-section">
        <div className="grid grid-cols-12 gap-4 py-4">
          <div className="lg:col-span-8 col-span-full">{children}</div>
          <div className="lg:col-span-4 col-span-full">Recent Data</div>
        </div>
      </div>
    </>
  );
};

export default AuctionLayout;
