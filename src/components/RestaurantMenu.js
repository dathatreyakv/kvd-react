import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const [urlParams] = useSearchParams();
  const resInfo = useRestaurantMenu(resId);
  const [expandCategoryIndx, setExpandCategoryIndx] = useState(-1);
  if(!resInfo) return null;
  const {name, cuisines, avgRating, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(grp => grp.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory');

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      {
        categories.map((category, indx) =>
           <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
                               expand={indx===expandCategoryIndx}
                               expandCategory={() => setExpandCategoryIndx(indx)}/>)
      }
      {/* <ul>
        {
          itemCards?.map((item, index) => {
            let info = item?.card?.info
            return <li key={info.id+"-"+index}>{info.name} - 
            ₹{parseFloat(info.price || info.defaultPrice)/100.0}</li>
          })
        }
      </ul> */}
    </div>
  )
}

export default RestaurantMenu;