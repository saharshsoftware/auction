import React from "react";
import ActionButton from "./ActionButton";
import { formatPrice } from "../../shared/Utilies";

interface IAuctionCard {
  item?: any;
  handleClick?: (data: any) => void;
}
const AuctionCard: React.FC<IAuctionCard> = (props) => {
  const { item, handleClick = () => {} } = props;
  return (
    <>
      <div className="flex flex-col gap-4 p-4 border rounded shadow w-full min-h-52">
        <div className="flex lg:flex-row flex-col gap-4 justify-between items-start">
          <h2
            className="custom-h2-class line-clamp-1 cursor-pointer"
            onClick={() => handleClick(item)}
          >
            {item?.title}
          </h2>
          <span className="custom-prize-color font-bold text-2xl">
            &#8377; {formatPrice(item?.price)}
          </span>
        </div>
        <p className="flex-1 line-clamp-4">{item?.desc}</p>
        <div className="flex lg:flex-row flex-col gap-4 justify-between items-start">
          <span className="font-bold">{item?.date}</span>
          <ActionButton text="View Auction" customClass="lg:w-fit w-full" />
        </div>
      </div>
    </>
  );
};

export default AuctionCard;
