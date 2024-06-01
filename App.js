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

const restaurants = [{
  name: 'shah ghouse Foods',
  specials: 'Biryani, North Indian, Asian',
  rating: '4.3 Star',
  delivery_time: '38 minutes',
  logo: 'https://b.zmtcdn.com/data/pictures/3/93043/b4f8daac26d882ac8c0961932ba0b4a4_featured_v2.jpg',
  description: 'Restaurant Description'
}, {
  name: 'KFC',
  specials: 'Smoke grill Chicken, Asian',
  rating: '4 Star',
  delivery_time: '25 minutes',
  logo: 'https://b.zmtcdn.com/data/pictures/3/93043/b4f8daac26d882ac8c0961932ba0b4a4_featured_v2.jpg',
  description: 'Restaurant Description'
}]

const RestaurantCard = ({logo, name, specials, rating, delivery_time}) => (
  <div className="res-card" style={{backgroundColor: '#F0F0F0'}}>
    <img className="restaurant-image" src={logo}/>
    <div className="restaurant-info">
      <h3>{name}</h3>
      <h4>{specials}</h4>
      <h4>{rating}</h4>
      <h4>{delivery_time}</h4>
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
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant}/>
      ))}
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