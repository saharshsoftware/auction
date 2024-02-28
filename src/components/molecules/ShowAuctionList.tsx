import React from "react";
import { SAMPLE_PLOT } from "../../shared/Constants";
import AuctionCard from "../atoms/AuctionCard";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../shared/Routes";

const ShowAuctionList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (data: any) => {
    navigate(ROUTE_CONSTANTS.AUCTION_DETAIL + "/" + data?.id);
  };
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {SAMPLE_PLOT.map((item, index) => {
          return (
            <>
              <div className="w-full" key={index}>
                <AuctionCard item={item} handleClick={handleClick} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ShowAuctionList;
