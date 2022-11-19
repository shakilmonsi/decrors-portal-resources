import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../layout/DashbordLauout/AllUsers/AllUsers";
import DeshboardLayout from "../../layout/DashbordLauout/DeshboardLayout";
import MyAppointment from "../../layout/DashbordLauout/MyAppointment/MyAppointment";
import Main from "../../layout/Maib/Main";
import Appointment from "../../pages/Appointment/Appointment";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/register/Register";
import PraivatsRoutes from "../PraivatRoutes/PraivatsRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DeshboardLayout></DeshboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router;
