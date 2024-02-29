import React from "react";
import { SAMPLE_CITY, SAMPLE_PLOT, STRING_DATA } from "../../shared/Constants";
import { formatPrice, formattedDate } from "../../shared/Utilies";
import useCurrentRouteWithoutId from "../../hooks/useCurrentRouteWithoutId";
import { ROUTE_CONSTANTS } from "../../shared/Routes";

const ShowSimilerProperties = (props: { item: any; index: number }) => {
  const { item, index } = props;
  return (
    <div className="w-full bg-gray-100 border border-t-2" key={index}>
      <div className="flex flex-col gap-4 p-4  w-full min-h-12">
        <h2 className="custom-h2-class line-clamp-1">{item?.title}</h2>
        {item?.date ? (
          <span className="text-sm">{formattedDate(item?.date)}</span>
        ) : null}
        <span className="custom-prize-color text-lg">
          {formatPrice(item?.price)}
        </span>
      </div>
    </div>
  );
};

const RecentData: React.FC = () => {
  const currentRoute = useCurrentRouteWithoutId();

  const renderChildren = () => {
    if (currentRoute === ROUTE_CONSTANTS.AUCTION) {
      return (
        <>
          <div className="bg-base-300 text-black font-bold p-2 rounded-t-md">
            {STRING_DATA.TOP_CITY}
          </div>
          {SAMPLE_CITY.map((item, index) => {
            return (
              <div className="w-full bg-gray-100 border border-t-2" key={index}>
                <div className="flex flex-col gap-4 p-4  w-full min-h-12">
                  <h2 className="line-clamp-1">{item?.label}</h2>
                </div>
              </div>
            );
          })}
        </>
      );
    }
    return (
      <>
        <div className="bg-base-300 text-black font-bold p-2 rounded-t-md">
          {STRING_DATA.SIMILER_PROPERTIES}
        </div>

        {SAMPLE_PLOT.slice(0, 5).map((item, index) => {
          return <ShowSimilerProperties item={item} index={index} />;
        })}
      </>
    );
  };
  return <div className="p-4">{renderChildren()}</div>;
};

export default RecentData;
