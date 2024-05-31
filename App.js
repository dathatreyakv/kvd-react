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

const RestaurantCard = ({logo, name, description = ''}) => (
  <div className="res-card" style={{backgroundColor: '#F0F0F0'}}>
    <img className="restaurant-image" height="50%" width="100%" src={logo}/>
    <div className="restaurant-info">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
)

const Body = () => (
  <div className="body">
    <div className="search">
      <input type="text" placeholder="Search Restaurants"/>
      Search
    </div>
    <div className="restaurant-container">
      <RestaurantCard logo="https://www.logodesign.net/logo/smoking-burger-with-letuce-3624ld.png"
        name="Restaurant Name" description="Restaurant Description" />
    </div>
  </div>
)

const AppLayout = () => (
  <div className="app">
    <Header/>
    <Body/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);