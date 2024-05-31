// App.js
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header
 *  - Logo
 *  - Navigation Items
 * - Body Container
 *  - SearchRestaurants
 *  - RestaurantContainer
 *    - RestaurantCard
 * - Footer
 *  - Copyright
 *  - License
 *  - Address
 *
 *  */
const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-letuce-3624ld.png"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
)

const AppLayout = () => (
  <div className="app">
    <Header/>
    {/* <Body/> */}
    {/* <Footer/> */}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);