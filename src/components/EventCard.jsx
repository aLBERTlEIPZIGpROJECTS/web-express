import React from "react";

const EventCard = ({ props }) => {
    const image = props.img ?? "./assets/fallback.img";
    return (
        <div className="event-card">
            <img src={image} alt={props.eventTitle} />
            <div className="info-text">
                <h2 className="event-title">{props.eventTitle}</h2>
                <p className="event-dates">{props.date}</p>
                <p className="event-price">{props.price}€</p>
            </div>
        </div>
    );
};

export default EventCard;
