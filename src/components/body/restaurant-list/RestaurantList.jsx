import useRestaurantList from "../../../utils/useRestaurantList";
import RestaurantCard from "../restaurant-card/RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantList = () => {

  
 const listOfRestaurants = useRestaurantList()
 

  return (
    <div className=" w-11/12 h-auto mx-auto p-2 flex flex-wrap justify-evenly">
      
        {
          listOfRestaurants?.map((restaurant) => (
            <Link to={'/restaurants/:'+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} /></Link>
          ))
        }
      
    </div>
  );
};

export default RestaurantList;
