const RestaurantCard = ({ resData }) => {
    const { resName, cuisine, rating, ratingText, image, address } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#ffffff" }}>
            <img alt="res-logo" src={image} />
            <h3>{resName}</h3>

            <h4 className="rating">
                <span className="rating-badge">{"★ " + rating}</span>
                <span className="rating-text">{ratingText}</span>
            </h4>

            <h4 className="cuisine">{cuisine}</h4>
            <h4 className="address">{address}</h4>
        </div>
    )
}

export default RestaurantCard;