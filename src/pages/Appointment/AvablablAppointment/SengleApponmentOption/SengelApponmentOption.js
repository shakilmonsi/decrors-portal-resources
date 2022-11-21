import React from "react";

const SengelApponmentOption = ({ option, setTratment }) => {
  const { name, price, slots } = option;

  return (
    <div className="card shadow-xl">
      <div className="card-body text-center mt-10">
        <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}available
        </p>
        <p>
          <small>TK:$ {price}</small>
        </p>

        <div className="card-actions justify-center">
          <label
            htmlFor="booking-module"
            className="btn btn-primary text-white"
            onClick={() => setTratment(option)}
          >
            book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default SengelApponmentOption;
