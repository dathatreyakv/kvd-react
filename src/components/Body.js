import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => (
  <div className="body">
    <div className="search">
      <input type="text" placeholder="Search Restaurants"/>
      Search
    </div>
    <div className="restaurant-container">
      {  restaurantsList.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} data={restaurant}/>) }
    </div>
  </div>
)

export default Body;