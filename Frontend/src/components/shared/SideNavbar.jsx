import React, { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import { Logo } from "./Logo";
import { UserNavLinks } from "../helpers/UserNavLinks";
import { AdminNavLinks } from "../helpers/AdminNavLinks";

export const SideNavbar = ({ admin = null, user = null }) => {
  //toggle sidebar
  useEffect(() => {
    //get navbar
    const sidebar = document.getElementById("mobile-nav");
    //get close btn
    const closeBtn = document.getElementById("closeSidebar");
    //get close btn
    const showBtn = document.getElementById("openSideBar");
    const detectClickOutsideNav = (e) => {
      if (
        !sidebar.contains(e.target) &&
        !closeBtn.contains(e.target) &&
        !showBtn.contains(e.target) &&
        !sidebar.classList.contains("-translate-x-full")
      ) {
        //hide navbar
        sidebar.classList.replace("translate-x-0", "-translate-x-full");

        //change btns
        closeBtn.classList.toggle("hidden");
        showBtn.classList.toggle("hidden");
      }
    };

    document.addEventListener("click", detectClickOutsideNav);

    return () => {
      document.removeEventListener("click", detectClickOutsideNav);
    };
  }, []);

  const sidebarHandler = () => {
    //get navbar
    const sidebar = document.getElementById("mobile-nav");
    //get close btn
    const closeBtn = document.getElementById("closeSidebar");
    //get show btn
    const showBtn = document.getElementById("openSideBar");

    if (sidebar.classList.contains("-translate-x-full")) {
      //show navbar
      sidebar.classList.replace("-translate-x-full", "translate-x-0");
    } else {
      //hide navbar
      sidebar.classList.replace("translate-x-0", "-translate-x-full");
    }

    //change btns
    closeBtn.classList.toggle("hidden");
    showBtn.classList.toggle("hidden");
  };

  return (
    <>
      {/* Sidebar starts */}

      {/* Tablet/desktop Sidebar*/}
      <div className="w-[300px] absolute sm:relative bg-slate-50 shadow-lg flex-col justify-between hidden lg:flex ">
        <div className="h-screen overflow-y-auto px-8 py-8 sticky top-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-400">
          {/* Logo */}
          <p className="text-4xl font-bold text-center text-blue-800">E-Bank</p>

          {/* Welcome Message */}
          <div className="flex items-center p-2 my-4 border text-base font-bold text-blue-800 rounded shadow">

            <span className="w-full">
              {admin && admin.name}
              {user && user.name}
            </span>
          </div>

          {/* Links */}
          <ul className="mt-12">
            {admin && <AdminNavLinks admin={admin} />}
            {user && <UserNavLinks user={user} />}
          </ul>
        </div>
      </div>

      {/*Mobile Sidebar */}
      <div
        className="w-64 h-screen z-40 fixed bg-slate-50 shadow-lg md:h-full flex-col justify-between lg:hidden  transition-all duration-300  ease-in-out -translate-x-full"
        id="mobile-nav"
      >
        <div
          className="h-10 w-10 backdrop-blur-[1px] bg-slate-50/30 absolute right-0 mt-16 -mr-10 p-1 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer ${"
          id="mobile-toggler"
          onClick={sidebarHandler}
        >
          <BiMenu id="openSideBar" className="text-blue-800" size={40} />
          <TiDelete
            id="closeSidebar"
            className="hidden text-blue-800"
            size={40}
          />
        </div>
        <div
          className="
            h-screen overflow-y-auto px-8 py-8 sticky top-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-400"
        >
          {/* Logo */}
          <p className="text-4xl font-bold text-center text-blue-800">E-Bank</p>

          {/* Welcome Message */}
          <div className="flex items-center p-2 my-4 border text-sm font-bold text-blue-800 rounded shadow">
            <AiFillHeart className="mr-1" size={22} />
            <span className="w-full">
              {`Welcome, `}
              {admin && admin.name.split(" ")[0]}
              {user && user.name.split(" ")[0]}
            </span>
          </div>

          {/* Links */}
          <ul className="mt-12">
            {admin && <AdminNavLinks admin={admin} />}
            {user && <UserNavLinks user={user} />}
          </ul>
        </div>
      </div>

      {/* Sidebar ends */}
    </>
  );
};
