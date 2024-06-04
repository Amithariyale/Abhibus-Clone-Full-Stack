import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AbhibusApp = () => {
  return (
    <div className="root-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AbhibusApp;
