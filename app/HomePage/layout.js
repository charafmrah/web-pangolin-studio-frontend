"use client";

import TopBar from "../../components/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Sidebar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SideBar />
      <div className="flex justify-center min-h-screen px-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80">
        <Outlet />
      </div>
    </>
  );
}
