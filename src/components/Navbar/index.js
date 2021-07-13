import React from "react";

//components
import Form from "../Form";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-64 px-12 pt-4 pb-6 bg-blue-500 dark:bg-gray-900">
      <div className="flex flex-row items-center justify-between pb-2 border-b"></div>
      {/* <!-- ADMIN info --> */}
      {/* <div className="mt-8">
        <img
          className="object-cover w-12 h-12 rounded-full"
          src=""
          alt="admin profile"
        />
        <h2 className="mt-4 text-xl font-extrabold capitalize">
          Hi, Admin
        </h2>
        <span className="">Admin</span>
      </div> */}
      <Form />
      <ul className="mt-2 text-white ">
        <li className="py-2 mt-8 hover:shadow hover:bg-white hover:dark:bg-gray-200 hover:rounded-full ">
          <a href="#home" className="flex pl-4">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"
              ></path>
            </svg>
            <span className="ml-2 font-medium text-black capitalize select-none dark:text-gray-300">
              users
            </span>
          </a>
        </li>
      </ul>

      <div className="flex items-center mt-auto font-extrabold text-black hover:text-red-400">
        <a href="#home" className="flex items-center">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"
            ></path>
          </svg>
          <span className="ml-2 font-medium capitalize">log out</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
