import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvablablAppointment from "./AvablablAppointment/AvablablAppointment";

const Appointment = () => {
  const [selectedData, setSelectedData] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      ></AppointmentBanner>
      <AvablablAppointment selectedData={selectedData}></AvablablAppointment>
    </div>
  );
};

export default Appointment;
