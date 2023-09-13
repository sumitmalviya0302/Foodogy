import { useParams } from "react-router-dom";

import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import MenuHeader from "./menu-header/MenuHeader";
// import Offers from "./menu-header/Offers";
// import MenuItemsList from "./menu-items-list/MenuItemsList";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurantMenuInfo = useRestaurantMenu(id);
  console.log(restaurantMenuInfo)

  return (
    <div className=" w-8/12 mx-auto mt-4">
      <MenuHeader resMenu={restaurantMenuInfo?.cards?.[0]?.card?.card?.info} />
      {/* <Offers {...restaurantMenuInfo} /> */}
      {/* <div className="mt-8 p-2">
        <p>Veg Only</p>
      </div> */}

      {/* <div className="w-full h-2 border bg-gray-100 my-4"></div> */}

      {/* <MenuItemsList {...restaurantMenuInfo} /> */}
    </div>
  );
};

export default RestaurantMenu;
