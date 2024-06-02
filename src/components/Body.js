import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {
  const [restaurants , setRestaurants] = useState(restaurantsList);

  function filterTopRatedRestaurants() {
    setRestaurants(restaurantsList.filter((restaurant) => restaurant?.info?.avgRating >= 4.5) )
  }

  return <div className="body">
    <div className="data-filters">
      <div className="search">
        <input type="text" placeholder="Search Restaurants"/>
        Search
      </div>
      <button type="button" className="btn btn-rating-filter" onClick={filterTopRatedRestaurants}>Top rated Restaurants</button>
    </div>
    

    <div className="restaurant-container">
      {  restaurants.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} data={restaurant}/>) }
    </div>
  </div>
}

export default Body;