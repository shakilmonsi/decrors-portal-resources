import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [errorLogin, setLoginError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const handleLogin = (data) => {
    console.log(data);
    setLoginError(" ");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast("user Login successfully");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <textarea
              {...register("email", { required: "email address required" })}
              placeholder=" your email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className=" text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <textarea
              {...register("password", {
                required: "password id required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or longer",
                },
              })}
              placeholder="your password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>
            {errorLogin && <p className="text-red-600">{errorLogin}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal
          <Link className="text-secondary" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
