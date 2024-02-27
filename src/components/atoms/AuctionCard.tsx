import React from "react";

interface IAuctionCard {
  item?: any;
}
const AuctionCard: React.FC<IAuctionCard> = (props) => {
  const { item } = props;
  return (
    <>
      <div className="flex flex-col gap-4 p-4 border rounded shadow w-full min-h-52">
        <h2 className="custom-h2-class line-clamp-1">{item?.title}</h2>
        <p className="flex-1 line-clamp-4">{item?.desc}</p>
        <em>{item?.price}</em>
      </div>
    </>
  );
};

export default AuctionCard;
