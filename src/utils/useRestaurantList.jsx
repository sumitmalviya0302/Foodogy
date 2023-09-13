import { useEffect, useState } from "react";


const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

  

    useEffect(() => {
      getRestaurantList();
    }, []);
  
    const getRestaurantList = async () => {
        const restaurantsData = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
  
        const json = await restaurantsData.json();
        setListOfRestaurants(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      
    };
  return listOfRestaurants
}

export default useRestaurantList