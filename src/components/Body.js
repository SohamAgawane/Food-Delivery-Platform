import RestaurantCard from "./RestaurantCard";
import restaurantsInfo from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantsInfo);

    return (
        <div className="body">
            <div className="filter">
                Search
                <input type="text" placeholder="Search for restaurants and food"/>

                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = restaurantsInfo.filter((res) => {
                        return Number(res.rating) >= 4;
                    })
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                
            </div>

            <div className="res-container">
                { filteredRestaurant.map((res) => (
                    <RestaurantCard key={res.resName} resData={res} />
                )) }
            </div>
        </div>
    )
}

export default Body;