import { CDN_Url } from "../utils/constants";

const RestaurantCard = ({ restData }) => {
  return (
    <div className="restaurant-card">
      <img
        src={CDN_Url + restData.info.cloudinaryImageId}
        alt={restData.info.name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h3>{restData.info.name}</h3>
        <p>{restData.info.cuisines.join(", ")}</p>
        <p>Rating: {restData.info.avgRating}</p>
        <p>Delivery Time: {restData.info.sla.lastMileTravel} km</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
