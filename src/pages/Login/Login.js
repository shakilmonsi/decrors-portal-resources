import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  // const { register, formState: { errors }, handleSubmit } = useForm();
  // const { signIn } = useContext(AuthContext);
  // const [loginError, setLoginError] = useState('');
  // const location = useLocation();
  // const navigate = useNavigate();

  // const from = location.state?.from?.pathname || '/';

  // const handleLogin = data => {
  //     console.log(data);
  //     setLoginError('');
  //     signIn(data.email, data.password)
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user);
  //             navigate(from, {replace: true});
  //         })
  //         .catch(error => {
  //             console.log(error.message)
  //             setLoginError(error.message);
  //         });
  // }
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
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
              {...register("email")}
              placeholder=" your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <textarea
              {...register("password")}
              placeholder="your password"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
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
