import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import reportWebVitals from "../../../reportWebVitals";

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

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("booking confirm");
        console.log(data);
        setTratment(null);
      });
  };
  const { user } = useContext(AuthContext);
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
              value={data}
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
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModul;
