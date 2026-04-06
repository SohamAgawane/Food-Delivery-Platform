import React from "react";
import ReactDOM from "react-dom/client";

/*  Components -
        1. Header 
            a. Logo
            b. Nav Items
        2. Body -
            a. Search Bar
            b. Restaurant Container -> Restaurant Card
                i. Image
                ii. Name
                iii. Star rating
                iv. Cuisine
                v. Delivery time
        3. Footer -
            a. Copyright
            b. Links
            c. Adress & Contact information
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ resData }) => {
    const { resName, cuisine, ratingBadge, ratingText, image, address } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#ffffff" }}>
            <img alt="res-logo" src={image} />
            <h3>{resName}</h3>

            <h4 className="rating">
                <span className="rating-badge">{ratingBadge}</span>
                <span className="rating-text">{ratingText}</span>
            </h4>

            <h4 className="cuisine">{cuisine}</h4>
            <h4 className="address">{address}</h4>
        </div>
    )
}

const restaurantsInfo = [
    {
        resName: "Starbucks Coffee",
        cuisine: "Beverages, Cafe, Snacks, Desserts",
        ratingBadge: "★ 4.7",
        ratingText: "(1.6K+) • 35-45 mins",
        address: "F.C. Road • 1.8 km",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/ifw2nuq4xxus7ijlibvf"
    },
    {
        resName: "KFC",
        cuisine: "Burgers, Fast Food, Rolls & Wraps",
        ratingBadge: "★ 4.2",
        ratingText: "(900+) • 30-40 mins",
        address: "J.M. Road • 2.8 km",
        image: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
    },
    {
        resName: "Vaishali",
        cuisine: "South Indian, Fast Food, Desserts",
        ratingBadge: "★ 4.2",
        ratingText: "(2.3K+) • 30-40 mins",
        address: "F.C. Road • 2.0 km",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC2Rgz4TEbjGYR5DShRU7gBmW-36-eqpcPw&s"
    },
    {
        resName: "Cafe Goodluck",
        cuisine: "Irani Cafe, North Indian, Biryani",
        ratingBadge: "★ 4.1",
        ratingText: "(1.5K+) • 35-45 mins",
        address: "Deccan Gymkhana • 2.5 km",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/da/3d/88/cafe-good-luck.jpg"
    },
    {
        resName: "Sukanta Thali",
        cuisine: "Gujarati, Rajasthani Thali",
        ratingBadge: "★ 4.2",
        ratingText: "(900+) • 40-50 mins",
        address: "Deccan • 3.0 km",
        image: "https://im.whatshot.in/img/2021/Jun/sukanta-f-cropped-1623653058.jpg"
    },
    {
        resName: "Le Plaisir",
        cuisine: "Italian, Continental, Cafe",
        ratingBadge: "★ 4.5",
        ratingText: "(800+) • 40-50 mins",
        address: "Prabhat Road • 2.2 km",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/74/bb/62/caption.jpg"
    },
    {
        resName: "Katakirr Misal",
        cuisine: "Maharashtrian, Misal",
        ratingBadge: "★ 4.1",
        ratingText: "(3K+) • 20-30 mins",
        address: "Erandwane • 3.5 km",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Katakirr_Misal_Pav.jpg"
    },
    {
        resName: "Shabree",
        cuisine: "Maharashtrian Thali",
        ratingBadge: "★ 4.2",
        ratingText: "(1.2K+) • 35-45 mins",
        address: "FC Road • 2.4 km",
        image: "https://b.zmtcdn.com/data/collections/bb4d4203c9b682ba0ffc77cfba62e4c1_1722255652.png"
    },
    {
        resName: "Malaka Spice",
        cuisine: "Thai, Asian",
        ratingBadge: "★ 4.3",
        ratingText: "(1.8K+) • 40-50 mins",
        address: "Koregaon Park • 5.5 km",
        image: "https://b.zmtcdn.com/data/pictures/chains/3/10213/43ef7fe859781bab2b29c29fd71bdc8d.jpg"
    },
    {
        resName: "Copper Chimney",
        cuisine: "North Indian, Mughlai",
        ratingBadge: "★ 4.7",
        ratingText: "(3K+) • 40-50 mins",
        address: "Viman Nagar • 7.0 km",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2025/7/26/a6745721-5f3a-47a3-9d03-b250e329f9de_d4ce7fda-ff6d-4e29-9fb6-083336d16fef.png"
    }
];

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

const AppLayout = () => {
    return (
        <div className="app">
            {<Header />}
            {<Body />}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);