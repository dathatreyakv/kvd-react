import { useContext, useRef, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import checkOnlineStatus from "../utils/checkOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const cartItems = useSelector((store) => store.cart.items)
  let counterRef = useRef(0);
  let onlineStatus = checkOnlineStatus();
  let {loggedInUser} = useContext(UserContext);

  function onBtnClick () {
    setBtnName(btnName == 'Login' ? 'Logout' : 'Login');
  }

  function onLinkClick () {
    counterRef.current+=1;
    console.log(counterRef.current);
  }
  console.log("Healder Rendered");
  return <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-100 lg:bg-blue-100">
    <div>
      <img className="w-28 h-fit" src={LOGO_URL}/>
    </div>
    <div>
      <ul className="flex p-4 m-4 items-center gap-4">
        <li>Online {onlineStatus ? "✅" : "❌"}</li>
        <li onClick={onLinkClick}><Link to="/">Home</Link></li>
        <li onClick={onLinkClick}><Link to="/about">About Us</Link></li>
        <li onClick={onLinkClick}><Link to="/contact">Contact Us</Link></li>
        <li onClick={onLinkClick}><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
        
        <button className="cursor-pointer bg-gray-400 px-4 py-1" onClick={onBtnClick}>{btnName}</button>
        <li className="font-bold">{loggedInUser}</li>
      </ul>
    </div>
  </div>
}