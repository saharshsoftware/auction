import React from "react";
import FindAuction from "../components/molecules/FindAuction";
import ShowAuctionList from "../components/molecules/ShowAuctionList";

const Auction: React.FC = () => {
  return (
    <>
      <FindAuction />
      <div className="common-section">
        <div className="grid grid-cols-12 gap-4 py-4">
          <div className="lg:col-span-8 col-span-full">
            <ShowAuctionList />
          </div>
          <div className="lg:col-span-4 col-span-full">Recent Data</div>
        </div>
      </div>
    </>
  );
};

export default Auction;
