import RestaurantList from "./restaurant-list/RestaurantList"
import SearchBar from "./search-bar/SearchBar"



const Body = () => {
  return (
    <div className="w-full h-auto border py-5">
        <SearchBar />
        <RestaurantList />
    </div>
  )
}

export default Body