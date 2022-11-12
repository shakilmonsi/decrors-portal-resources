import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCart from "./InfoCart";
const InfoCarts = () => {
  const cartData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: clock,
      bgClass: " bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: " Our LOcation",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "contact US",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: phone,
      bgClass: " bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cartData.map((cart) => (
        <InfoCart key={cart.id} cart={cart}></InfoCart>
      ))}
    </div>
  );
};

export default InfoCarts;
