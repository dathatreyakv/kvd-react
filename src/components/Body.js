import { RESTAURANT_DATA_URL } from "../utils/constants";
import BodyShimmer from "./BodyShimmer";
// import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useRef, useState} from "react";

const Body = () => {
  let restaurantsList = useRef([]);
  const [restaurants , setRestaurants] = useState([]);
  
  function filterTopRatedRestaurants() {
    setRestaurants(restaurantsList.current.filter((restaurant) => restaurant?.info?.avgRating >= 4) )
  }

  useEffect(fetchRestaurantsData, []);
  function fetchRestaurantsData() {
    fetch(RESTAURANT_DATA_URL)
     .then((response) => response.json())
     .then((data) => {
      console.log('REQUEST TRIGGERED----')
      data = data.data.cards.find((r) => r?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      restaurantsList.current = data.card?.card?.gridElements?.infoWithStyle?.restaurants

      setRestaurants(restaurantsList.current)
    })
     .catch((error) => console.log(error));
  }

  if(!restaurantsList?.current?.length) {
    return <BodyShimmer/>
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