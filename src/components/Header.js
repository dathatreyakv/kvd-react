import { useRef, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
  const [btnName, setBtnName] = useState('Login');
  let counterRef = useRef(0);

  function onBtnClick () {
    setBtnName(btnName == 'Login' ? 'Logout' : 'Login');
  }

  function onLinkClick () {
    counterRef.current+=1;
    console.log(counterRef.current);
  }

  return <div className="header">
    <div className="logoContainer">
      <img className="logo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
      <ul>
        <li onClick={onLinkClick}><Link to="/">Home</Link></li>
        <li onClick={onLinkClick}><Link to="/about">About Us</Link></li>
        <li onClick={onLinkClick}><Link to="/contact">Contact Us</Link></li>
        <li onClick={onLinkClick}>Cart</li>
        <button className="login-btn" onClick={onBtnClick}>{btnName}</button>
      </ul>
    </div>
  </div>
}