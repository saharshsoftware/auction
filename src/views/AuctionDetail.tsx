import React from "react";
import AuctionLayout from "../components/layouts/AuctionLayout";

const AuctionDetail: React.FC = () => {
  return (
    <>
      <AuctionLayout>
        <div className="grid grid-cols-12 gap-4 py-4">
          <div className="lg:col-span-8 col-span-full">
            {/* <ShowAuctionList /> */}
          </div>
          <div className="lg:col-span-4 col-span-full">Recent Data</div>
        </div>
      </AuctionLayout>
    </>
  );
};

export default AuctionDetail;
