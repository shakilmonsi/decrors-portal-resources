import React from "react";
import quote from "../../../assets/icons/quote.svg";
import r1 from "../../../assets/images/people1.png";
import r2 from "../../../assets/images/people2.png";
import r3 from "../../../assets/images/people3.png";
import Testimonials from "../Testimonials/Testimonials";
const Testimonieal = () => {
  const review = [
    {
      id: 1,
      name: "winson herry",
      img: r1,
      review:
        "it is a long established fact that by the readaeelebv It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
    },
    {
      id: 2,
      name: "apon",
      img: r2,
      review:
        "it is a long established fact that by the readaeele It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Pakistan",
    },
    {
      id: 3,
      name: "Skhakl mainsi ",
      img: r3,
      review:
        "it is a long established fact that by the readaeele It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "bangladesh",
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className=" text-xl text-primary font-bold">TEstimonial</h4>
          <h2 className="text-4xl"> What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>

      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {review.map((rv) => (
          <Testimonials key={rv.id} rv={rv}></Testimonials>
        ))}
      </div>
    </section>
  );
};

export default Testimonieal;
