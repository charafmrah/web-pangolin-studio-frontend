import TopBar from "../../components/TopBar.js";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Sidebar.js";

function HomePage() {
  return (
    <>
      <TopBar />
      <SideBar />
      <div className="flex justify-center min-h-screen px-5 pb-5 md:pb-10 ">
        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
