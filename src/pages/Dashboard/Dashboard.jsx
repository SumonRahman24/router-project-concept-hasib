import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex p-10">
      <nav className="bg-blue-400 w-32 flex flex-col">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/dashboard/profile"}>Profile</NavLink>
        <NavLink to={"/dashboard/editProfile"}>Edit Profile</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
