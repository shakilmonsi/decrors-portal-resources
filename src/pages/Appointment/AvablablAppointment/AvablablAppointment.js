import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModul from "../BookingModul/BookingModul";
import SengelApponmentOption from "./SengleApponmentOption/SengelApponmentOption";

const AvablablAppointment = ({ selectedData }) => {
  // const [appointmentOptionss, setAppointmentOptions] = useState([]);
  const [treatment, setTratment] = useState(null);

  const { data: appointmentOptionss = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/apponment");
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  // fetch("http://localhost:5000/apponment").then((res) => res.json());
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="my-16">
      <p className="text-center font-bold text-primary">
        you have selected date: {format(selectedData, "PP")}
      </p>

      <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointmentOptionss.map((option) => (
          <SengelApponmentOption
            key={option.id}
            option={option}
            setTratment={setTratment}
          ></SengelApponmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModul
          treatment={treatment}
          setTratment={setTratment}
          selectedData={selectedData}
        ></BookingModul>
      )}
    </section>
  );
};

export default AvablablAppointment;
