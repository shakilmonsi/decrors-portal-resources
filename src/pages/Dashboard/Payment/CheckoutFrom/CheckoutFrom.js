import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutFrom = () => {
  //step .2
  const stripe = useStripe();
  const elements = useElements();
  //step .7
  const [cartError, setCartError] = useState("");
  // step .1
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
  };
  //step .3
  if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return;
  }
  //step.4
  const card = elements.getElement(CardElement);

  //   if (card === null) {
  //     return;
  //   }
  //step .6

  // Use your card Element with other Stripe.js APIs
  const { error, paymentMethod } = stripe.createPaymentMethod({
    type: "card",
    card,
  });

  //step .8------------

  //step .8------------
  if (error) {
    console.log("[error]", error);
  } else {
    setCartError("[PaymentMethod]", paymentMethod);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm mt-4 btn-primary"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutFrom;
