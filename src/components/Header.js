import { useRef, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import checkOnlineStatus from "../utils/checkOnlineStatus";

export default Header = () => {
  const [btnName, setBtnName] = useState('Login');
  let counterRef = useRef(0);
  let onlineStatus = checkOnlineStatus();

  function onBtnClick () {
    setBtnName(btnName == 'Login' ? 'Logout' : 'Login');
  }

  function onLinkClick () {
    counterRef.current+=1;
    console.log(counterRef.current);
  }

  return <div className="flex justify-between bg-pink-100 shadow-lg">
    <div>
      <img className="w-24 h-fit" src={LOGO_URL}/>
    </div>
    <div>
      <ul className="flex p-4 m-4 items-center gap-4">
        <li>Online {onlineStatus ? "✅" : "❌"}</li>
        <li onClick={onLinkClick}><Link to="/">Home</Link></li>
        <li onClick={onLinkClick}><Link to="/about">About Us</Link></li>
        <li onClick={onLinkClick}><Link to="/contact">Contact Us</Link></li>
        <li onClick={onLinkClick}>Cart</li>
        <button className="cursor-pointer bg-gray-400" onClick={onBtnClick}>{btnName}</button>
      </ul>
    </div>
  </div>
}