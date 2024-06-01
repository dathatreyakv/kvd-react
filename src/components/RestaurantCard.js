
const RestaurantCard = (props) => {
  if(!props) return null;
  const {name, costForTwo, cuisines, avgRatingString, cloudinaryImageId, sla} = props?.data?.info;
  return <div className="res-card" style={{backgroundColor: '#F0F0F0'}}>
    <img className="restaurant-image" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
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