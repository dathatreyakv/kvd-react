import { SWIGGY_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  if(!props) return null;
  const {name, costForTwo, cuisines, avgRatingString, cloudinaryImageId, sla} = props?.data?.info;
  return <div className="res-card">
    <img className="restaurant-image" src={SWIGGY_ASSET_URL+cloudinaryImageId}/>
    <div className="restaurant-info">
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} Star</h4>
      <h4>{sla.slaString}</h4>
    </div>
  </div>
}

export default RestaurantCard;