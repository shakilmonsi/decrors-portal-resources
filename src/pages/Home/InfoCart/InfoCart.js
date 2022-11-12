import React from "react";

const InfoCart = ({ cart }) => {
  const { name, description, icon, bgClass } = cart;

  return (
    <div className={`card text-white md:card-side p-6 shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCart;
