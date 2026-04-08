import RestaurantCard from "./RestaurantCard";
import restaurantsInfo from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
                <input type="text" placeholder="Search for restaurants and food" />
            </div>

            <div className="res-container">
                { restaurantsInfo.map((res) => (
                    <RestaurantCard key={res.resName} resData={res} />
                )) }
            </div>
        </div>
    )
}

export default Body;