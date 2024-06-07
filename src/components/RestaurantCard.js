import { DEFAULT_RESTAURANT_IMG, SWIGGY_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {name, costForTwo, cuisines, avgRatingString, cloudinaryImageId, sla} = props?.data?.info;

  function setToDefaultImg(e) {
    e.target.src = DEFAULT_RESTAURANT_IMG;
  }
  console.log("RestaurantCard rendered");
  if(!props) return null;

  return <div className="m-4 p-2 w-[240px] bg-gray-100 hover:bg-gray-200">
    <img className="w-56 h-[180px] rounded-md" 
    src={SWIGGY_ASSET_URL+cloudinaryImageId}
    onError={setToDefaultImg}/>
    <div>
      <h3 className="font-bold py-2">{name}</h3>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRatingString} Star</h5>
      <h5>{sla.slaString}</h5>
    </div>
  </div>
}

export default RestaurantCard;