import { DEFAULT_RESTAURANT_IMG, SWIGGY_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {name, costForTwo, cuisines, avgRatingString, cloudinaryImageId, sla} = props?.data?.info;

  function setToDefaultImg(e) {
    e.target.src = DEFAULT_RESTAURANT_IMG;
  }
  console.log("RestaurantCard rendered");
  if(!props) return null;

  return <div className="res-card">
    <img className="restaurant-image" 
    src={SWIGGY_ASSET_URL+cloudinaryImageId}
    onError={setToDefaultImg}/>
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