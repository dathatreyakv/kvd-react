import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => { fetchMenu() }, []);
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL.replace(':resId', resId))
    const json = await data.json();
    setResInfo(json?.data);
    // console.log(json);
  }

  return resInfo;
}

export default useRestaurantMenu;