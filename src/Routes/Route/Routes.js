import { createBrowserRouter } from "react-router-dom";
import AdDoctor from "../../layout/DashbordLauout/AdDoctor/AdDoctor";
import AllUsers from "../../layout/DashbordLauout/AllUsers/AllUsers";
import DeshboardLayout from "../../layout/DashbordLauout/DeshboardLayout";
import ManageDoctor from "../../layout/DashbordLauout/ManageDoctor/ManageDoctor";
import MyAppointment from "../../layout/DashbordLauout/MyAppointment/MyAppointment";
import Main from "../../layout/Maib/Main";
import Appointment from "../../pages/Appointment/Appointment";
import Payment from "../../pages/Dashboard/Payment/Payment";
import Home from "../../pages/Home/Home";
import Displayerror from "../../pages/Home/sheareds/DisplayError/Displayerror";
import Login from "../../pages/Login/Login";
import Register from "../../pages/register/Register";
import PraivatsRoutes from "../PraivatRoutes/PraivatsRoutes";
import AdminRoutes from "./AdminRoutes/AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Displayerror></Displayerror>,
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
    element: (
      <PraivatsRoutes>
        <DeshboardLayout></DeshboardLayout>
      </PraivatsRoutes>
    ),
    errorElement: <Displayerror></Displayerror>,

    children: [
      {
        path: "/dashboard",

        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/doctor",
        element: (
          <AdminRoutes>
            <AdDoctor></AdDoctor>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctor></ManageDoctor>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
export default router;
