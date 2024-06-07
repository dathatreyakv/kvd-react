import { Link } from "react-router-dom";
import { RESTAURANTS_DATA_URL } from "../utils/constants";
import BodyShimmer from "./BodyShimmer";
// import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useRef, useState} from "react";
import checkOnlineStatus from "../utils/checkOnlineStatus";

const Body = () => {
  // let [searchTxt, setSearchTxt] = useState('');
  let searchTxt = useRef('');
  let restaurantsList = useRef((() => {console.log("List State Triggered"); return []})());
  const [restaurants , setRestaurants] = useState([]);
  const onlineStatus = checkOnlineStatus();

  function filterRestaurantByName() {
    setRestaurants(restaurantsList.current.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchTxt.current.toLowerCase())) )
  }
  function filterTopRatedRestaurants() {
    setRestaurants(restaurantsList.current.filter((restaurant) => restaurant?.info?.avgRating >= 4) )
  }

  useEffect(fetchRestaurantsData, []);
  function fetchRestaurantsData() {
    fetch(RESTAURANTS_DATA_URL)
     .then((response) => response.json())
     .then((data) => {
      console.log('REQUEST TRIGGERED----')
      data = data.data.cards.find((r) => r?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      restaurantsList.current = data.card?.card?.gridElements?.infoWithStyle?.restaurants

      setRestaurants(restaurantsList.current)
    })
     .catch((error) => console.log(error));
  }

  // Conditional Rendering
  if(!onlineStatus) return <h3>Please check your internet...</h3>;

  return !restaurantsList?.current?.length ? <BodyShimmer/> :
  <div className="body">
    <div className="flex pt-4">
      <div className="pl-1 ml-2 mb-1">
        <input className="border border-solid border-black" type="text" placeholder="Search Restaurants" onChange={(e) => {searchTxt.current = e.target.value}}/>
        <button className="bg-green-100 px-4 py-0.5 m-4 rounded-sm" type="button" onClick={(() => {console.log("Function Invoked"); return filterRestaurantByName})() }>Search</button>
      </div>
      <div className="ml-2 mb-1">
        <button type="button" className="px-4 py-0.5 m-4 bg-gray-200 rounded-sm" onClick={filterTopRatedRestaurants}>Top rated Restaurants</button>
      </div>
    </div>
    <div className="flex flex-wrap">
      {  restaurants.map((restaurant, indx) => <Link key={restaurant?.info?.id+'-'+indx} to={'/restaurants/'+restaurant?.info?.id}>
        <RestaurantCard data={restaurant}/>
      </Link>) }
    </div>
  </div>
}

export default Body;