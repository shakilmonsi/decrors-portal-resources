import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const [token] = useToken(createdUserEmail);

  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        toast.success("user signUp successFully----");
        const userInfo = {
          displayName: data.name,
        };

        saveUser(data.name, data.email);

        // updateUser(userInfo)
        //   .then(() => {
        //   })
        //   .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  // add saveUsers class 75-3 -------.
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SignUP</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-3 "
            value="signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600 ">{signUpError}</p>}
        </form>
        <p>
          New to Doctors Portal
          <Link className="text-secondary" to="/login">
            please LOgin Dear
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Register;
