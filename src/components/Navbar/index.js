import React from "react";
import { useSelector } from "react-redux";
//components
import FormModal from "../Form";
import LogIn from "../Auth/LogIn";
import LogOut from "../Auth/LogOut";

const Navbar = () => {
  const admin = useSelector((state) => state.auth.authData);

  return (
    <nav className="flex flex-col items-center w-full px-12 pt-4 pb-6 bg-blue-500 xl:justify-center xl:w-64 dark:bg-gray-900">
      <div className="flex flex-row items-center justify-between pb-2 border-b"></div>
      {/* <!-- ADMIN info --> */}
      {!admin ? (
        <LogIn />
      ) : (
        <>
          <div className="mt-8 ">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={admin.result.imageUrl}
              alt={admin.result.name}
            />
            <h2 className="mt-4 text-lg font-extrabold capitalize">
              Hi, {admin.result.name}
            </h2>
            <span className="text-xs text-gray-300 ">Admin</span>
          </div>
          <FormModal />

          <LogOut />
        </>
      )}
    </nav>
  );
};

export default Navbar;
