import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../pages/Loading/Loading";

const AdDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {
    console.log(data);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-97 p7">
      <h3 className="text-4xl">Add A Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="text"
            {...register("name", { required: "name required" })}
            placeholder=" your name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="email"
            {...register("email", { required: "email address required" })}
            placeholder=" your email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select className="select input-bordered w-full max-w-xs">
            {specialties.map((specialty) => (
              <option key={specialty.id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className="btn btn-accent w-full mt-3 "
          value="Add doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AdDoctor;
