import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex  my-[-24px]">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
