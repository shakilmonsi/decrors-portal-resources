import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // // add saveUsers class 75-3 -------.
  // const saveUser=(name,email)=>{
  //     const user={name,email};
  //     fetch('http://localhost:5000/users',{

  //     method:  'POST',
  //     headers:{
  // 'content-type':"application/json"
  //     },
  //     body: JSON.stringify(user)
  //     })
  //     .then(res=>res.json())
  //     .then(data=>{
  //         console.log(data)
  //     })
  // }

  return (
    <div>
      <h2 className="text-5xl mb-5">this is my appointment</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDat}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
