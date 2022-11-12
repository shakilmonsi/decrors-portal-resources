import React from "react";
import Babby from "./Babby/Babby";
import Banner from "./banner/Banner";
import InfoCarts from "./InfoCart/InfoCarts";
import MajeAppointment from "./MakeA/MajeAppointment";
import Serveces from "./Serveces/Serveces";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Serveces></Serveces>
      <Babby></Babby>
      <MajeAppointment></MajeAppointment>
    </div>
  );
};

export default Home;
