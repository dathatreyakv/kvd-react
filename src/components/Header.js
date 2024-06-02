import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default Header = () => {
  const [btnName, setBtnName] = useState('Login');
  function onBtnClick () {
    setBtnName(btnName == 'Login' ? 'Logout' : 'Login');
  }
  return <div className="header">
    <div className="logoContainer">
      <img className="logo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="login-btn" onClick={onBtnClick}>{btnName}</button>
      </ul>
    </div>
  </div>
}