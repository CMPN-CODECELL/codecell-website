import React from "react";
import "./Card.css";

const Card = (props) => {
  const card = props.card;
  return (
    <div className="team-card-container">
      <img
        src={card.photo}
        loading="lazy"
        className="team-card-image"
        alt={card.name}
      />
      <div className="team-card-info-wrapper">
        <div className="team-card-text">
          <div className="team-card-name">{card.name}</div>
          <div className="team-card-desgn">{card.designation}</div>
        </div>

        {card.social && (
          <div className="team-card-social">
            <a href={card.social} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="2.5rem"
                height="2.5rem"
                viewBox="0 0 50 50"
                fill="#050816"
              >
                <path d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20	c0-0.5,0.5-1,1-1h4c0.5,0,1,0.5,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.5-0.5,1-1,1h-4	c-0.5,0-1-0.5-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20c0-0.5,0.5-1,1-1h4	c0.5,0,1,0.4,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z"></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
