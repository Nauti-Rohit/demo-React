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

const restObj = [
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Residency Road",
      areaName: "South Zone",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "8K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        slaString: "20 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      locality: "Brigade Road",
      areaName: "City Center",
      costForTwo: "₹500 for two",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "12K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        slaString: "35 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      locality: "Commercial Street",
      areaName: "East District",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "9K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        slaString: "28 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      locality: "Lavelle Road",
      areaName: "West End",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "7K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        slaString: "22 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Indiranagar",
      areaName: "Uptown",
      costForTwo: "₹800 for two",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRatingsString: "5K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.2,
        slaString: "40 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹150",
      },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "Jayanagar",
      areaName: "South Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "11K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹70",
      },
    },
  },
  {
    info: {
      id: "901234",
      name: "Pasta Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
      locality: "Koramangala",
      areaName: "Tech Hub",
      costForTwo: "₹450 for two",
      cuisines: ["Italian", "Pasta", "Continental"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "6K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        slaString: "32 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "45% OFF",
        subHeader: "UPTO ₹90",
      },
    },
  },
];

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
          <RestaurantCard restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = ({ restData }) => {
  return (
    <div className="restaurant-card">
      <img
        src="https://img.freepik.com/premium-photo/abstract-blurry-restaurant-interior-background-with-empty-wooden-table-mock-up_1028938-340982.jpg"
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
