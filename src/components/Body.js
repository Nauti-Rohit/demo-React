import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restObj);

  return (
    <div className="body">
      <div className="search-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (rest) => rest.info.avgRating > 4.5,
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
