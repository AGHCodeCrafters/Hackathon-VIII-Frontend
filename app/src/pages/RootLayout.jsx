import { Outlet } from "react-router-dom";
import Topbar from "../components/UI/Topbar";

const RootLayout = () => {
  return (
    <div className="max-h-[100vh] flex flex-col overflow-y-hidden bg-background">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
