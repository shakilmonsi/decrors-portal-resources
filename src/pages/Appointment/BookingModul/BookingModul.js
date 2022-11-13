import { format } from "date-fns";
import React from "react";

const BookingModul = ({ treatment, selectedData }) => {
  const date = format(selectedData, "PP");
  const { name, slots } = treatment;
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
          <form className="grid grid-cols-1 gap-3 mt-7">
            <input
              type="text"
              value={date}
              className="input input-bordered w-full "
            />
            <select className="select select-ghost w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <br />
            <input
              className="w-full h-8 p-9  btn-primary"
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
