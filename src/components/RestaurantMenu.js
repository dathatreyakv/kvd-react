import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  if(!resInfo) return null;
  const {name, cuisines, avgRating, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {
          itemCards?.map((item, index) => {
            let info = item?.card?.info
            return <li key={info.id+"-"+index}>{info.name} - 
            ₹{parseFloat(info.price || info.defaultPrice)/100.0}</li>
          })
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu;