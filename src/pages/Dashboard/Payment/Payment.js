import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDat, slot } = booking;
  console.log("booking data", booking);
  return (
    <div>
      <h3 className="text-3xl">payment for {treatment}</h3>
      <p className="text-xl">
        Please pay<strong>${price}</strong> for your appointment on
        {appointmentDat}
      </p>
      <p>Solt{slot}</p>
    </div>
  );
};

export default Payment;
