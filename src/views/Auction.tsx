import React from "react";
import ShowAuctionList from "../components/molecules/ShowAuctionList";
import AuctionLayout from "../components/layouts/AuctionLayout";

const Auction: React.FC = () => {
  return (
    <>
      <AuctionLayout>
        <ShowAuctionList />
      </AuctionLayout>
    </>
  );
};

export default Auction;
