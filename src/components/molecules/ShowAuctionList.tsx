import React from "react";
import { SAMPLE_PLOT } from "../../shared/Constants";
import AuctionCard from "../atoms/AuctionCard";

const ShowAuctionList: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {SAMPLE_PLOT.map((item, index) => {
          return (
            <>
              <div className="w-full" key={index}>
                <AuctionCard item={item} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ShowAuctionList;
