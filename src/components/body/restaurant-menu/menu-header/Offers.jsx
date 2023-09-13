import { BiSolidOffer } from "react-icons/bi";


const Offers = (props) => {

  const offerInfo = props

  return (
    <>
        <div className=" mt-2 p-2 flex justify-between overflow-auto w-full ">
            
        <div className="border w-52 p-2 rounded-lg">
          <div className="flex">
            <BiSolidOffer size='22px'/>
            <p className="text-sm font-bold text-gray-600">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.header}</p>

          </div>
          <div className="flex">
            <p className="text-xs text-gray-700">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.couponCode} &nbsp; </p>
            <span className="text-xs text-gray-700"> | </span>
            <span className="text-xs text-gray-700">&nbsp; {offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.description}</span>
          </div>
        </div>
        <div className="border w-52 p-2 ">
          <div className="flex">
            <BiSolidOffer size='22px'/>
            <p className="text-sm font-bold text-gray-600">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.header}</p>

          </div>
          <div className="flex">
            <p className="text-xs text-gray-700">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.couponCode} &nbsp; </p>
            <span className="text-xs text-gray-700"> | </span>
            <span className="text-xs text-gray-700">&nbsp; {offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.description}</span>
          </div>
        </div>
        <div className="border w-52 p-2 ">
          <div className="flex">
            <BiSolidOffer size='22px'/>
            <p className="text-sm font-bold text-gray-600">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.header}</p>

          </div>
          <div className="flex">
            <p className="text-xs text-gray-700">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.couponCode} &nbsp; </p>
            <span className="text-xs text-gray-700"> | </span>
            <span className="text-xs text-gray-700">&nbsp; {offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.description}</span>
          </div>
        </div>
        <div className="border w-52 p-2">
          <div className="flex">
            <BiSolidOffer size='22px'/>
            <p className="text-sm font-bold text-gray-600">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.header}</p>

          </div>
          <div className="flex">
            <p className="text-xs text-gray-700">{offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.couponCode} &nbsp; </p>
            <span className="text-xs text-gray-700"> | </span>
            <span className="text-xs text-gray-700">&nbsp; {offerInfo?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.[0]?.info?.description}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offers