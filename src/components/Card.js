import React from "react";
import "./Card.scss";
export const Card = ({ personaje }) => {
  return (
    <section className="personaje">
      <div className="personaje_personaje-header">
        <h2>{personaje.name}</h2>
      </div>

      <div className="personaje_personaje-body">
        <figure>
          <img src={personaje.image} alt={personaje.name} />
        </figure>
        <p>
          {personaje.species} <span>-</span> {personaje.gender}
        </p>
      </div>
    </section>
  );
};
