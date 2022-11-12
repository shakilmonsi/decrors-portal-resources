import React from "react";
import Babby from "./Babby/Babby";
import Banner from "./banner/Banner";
import InfoCarts from "./InfoCart/InfoCarts";
import MajeAppointment from "./MakeA/MajeAppointment";
import Serveces from "./Serveces/Serveces";
import Testimonieal from "./Testimoneal/Testimonieal";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Serveces></Serveces>
      <Babby></Babby>
      <MajeAppointment></MajeAppointment>
      <Testimonieal></Testimonieal>
    </div>
  );
};

export default Home;
