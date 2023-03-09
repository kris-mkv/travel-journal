import React from 'react';
import pointer from '../images/pointer-img.svg';

export default function Card(props) {
  return (
    <div className="card flex">
      <img
        className="card__img"
        src={props.card.imageUrl}
        alt={props.card.location}
      />
      <div className="card__info flex">
        <div className="card__location-info">
          <img src={pointer} alt="Pointer icon"></img>
          <p className="card__country">{props.card.location}</p>
          <a className="card__link" href={props.card.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="bold">{props.card.title}</h2>
        <p className="card__dates bold">
          {`${props.card.startDate} - ${props.card.endDate}`}
        </p>
        <p className="card__text">{props.card.description}</p>
      </div>
    </div>
  );
}
