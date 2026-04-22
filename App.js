import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            className="header-logo"
            src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </form>
      </div>

      <div className="restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://img.freepik.com/premium-photo/abstract-blurry-restaurant-interior-background-with-empty-wooden-table-mock-up_1028938-340982.jpg"
        alt="Restaurant 1"
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h3>Restaurant 1</h3>
        <p>Rating: 4.5</p>
        <p>Delivery Time: 30-40 mins</p>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
