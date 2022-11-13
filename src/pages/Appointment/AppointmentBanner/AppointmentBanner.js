import React from "react";
import c from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedData, setSelectedData }) => {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={c}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedData}
              onSelect={setSelectedData}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
