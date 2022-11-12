import React from "react";
import a from "../../../assets/images/fluoride.png";
import b from "../../../assets/images/cavity.png";
import c from "../../../assets/images/whitening.png";
import Servace from "./Servace/Servace";

const Serveces = () => {
  const servicesData = [
    {
      id: 1,
      name: "cavity",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been theLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: a,
      bgClass: "FFFFFF",
    },
    {
      id: 2,
      name: "whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: b,
      bgClass: "FFFFFF",
    },
    {
      id: 3,
      name: "fluoride",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: c,
      bgClass: "FFFFFF",
    },
  ];
  return (
    <div>
      <div className="text-center mt-16">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl ">Services We Provide</h2>
      </div>
      <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service) => (
          <Servace key={service.id} service={service}></Servace>
        ))}
      </div>
    </div>
  );
};

export default Serveces;
