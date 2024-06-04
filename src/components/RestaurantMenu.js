import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => { fetchMenu() }, []);
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL.replace(':resId', resId))
    const json = await data.json();
    setResInfo(json?.data);
    console.log(json);
  }

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