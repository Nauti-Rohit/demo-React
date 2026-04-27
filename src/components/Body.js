import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/MockData";

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
        {restObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
