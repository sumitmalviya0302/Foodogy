import { useEffect, useState } from "react";

const useRestaurantMenu = ({id}) =>{
    const [restaurantMenuInfo, setRestaurantMenuInfo] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const restaurantMenuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id
    );

    const json = await restaurantMenuData.json();
    console.log(json.data);
    setRestaurantMenuInfo(json.data);
  };

  return restaurantMenuInfo
}


export default useRestaurantMenu
