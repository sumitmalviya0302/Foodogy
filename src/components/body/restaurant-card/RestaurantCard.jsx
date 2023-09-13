import {IMG_URL} from '../../../utils/constants'

const RestaurantCard = (props) => {

  const resData = props

  const {name,cuisines,cloudinaryImageId,avgRating,areaName,costForTwo} = resData

  return (
    <div className="w-80 h-auto  p-2 my-2">
        <img src={IMG_URL + cloudinaryImageId} alt="logo" className="w-full border h-48 mx-auto rounded-2xl"/>
        <h2 className="text-lg mt-2 ">{name}</h2>
        <p className="text-sm mt-2 text-gray-500">{cuisines.join(", ")}</p>
        <ul className="flex justify-between mt-2">
            <li className="text-gray-600">{avgRating} stars</li>
            <li className="text-gray-600">{areaName}</li>
            <li className="text-gray-600">{costForTwo}</li>
        </ul>
    </div>
  )
}

export default RestaurantCard