import { format } from "date-fns";
import React from "react";

const BookingModul = ({ treatment, setTratment, selectedData }) => {
  const date = format(selectedData, "PP");
  const { name, slots } = treatment;
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const slot = from.slot.value;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const booking = {
      appointmentDat: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTratment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-module" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-module"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-7">
            <input
              type="text"
              value={date}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-ghost w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="input input-bordered w-full "
            />
            <br />
            <input
              className="w-full h-8 br-10 btn-accent"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModul;
