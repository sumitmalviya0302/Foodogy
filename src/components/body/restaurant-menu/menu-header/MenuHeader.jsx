import { AiOutlineStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi";

const MenuHeader = ({resMenu}) => {
  const { name, cuisines, areaName, sla, avgRating, totalRatingsString, costForTwoMessage } = resMenu

  const {lastMileTravelString, slaString} = sla

  return (
    <>
      <div className="border-b border-dashed border-spacing-7 border-gray-300 p-2 flex justify-between">
        <div className="my-2">
          <p className="font-bold text-xl mb-1">{name}</p>
          <p className="text-sm text-gray-700  ">{cuisines.join(", ")}</p>
          <p className="text-sm text-gray-700 ">
            {areaName},
            <span className="ml-2 text-sm text-gray-700">
              {lastMileTravelString}
            </span>
          </p>
        </div>

        <div className="my-2 border p-1 outline-gray-600 ">
          <div className="flex justify-center h-1/2 border-b p-1">
            <AiOutlineStar size="20px" className="fill-green-700 mx-1" />
            <p className="font-bold text-green-700">{avgRating}</p>
          </div>
          <p className="text-xs text-gray-600 mt-1">{totalRatingsString}</p>
        </div>
      </div>

      <div className="p-2 flex">
        <BiTime size="20px" />
        <p className="font-bold mx-2 text-gray-700">{slaString}</p>
        <HiCurrencyRupee size="20px" className="ml-5" />
        <p className="ml-2 font-bold text-gray-700">{costForTwoMessage}</p>
      </div>
    </>
  );
};

export default MenuHeader;
