import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../pages/Home/sheareds/Header/Header";

const DeshboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard"> MY Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/users"> All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshboardLayout;
