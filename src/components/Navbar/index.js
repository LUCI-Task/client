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
      {/* <button className="flex items-center justify-center px-2 py-3 mt-8 font-bold text-black bg-white rounded-lg shadow dark:text-gray-200 hover:text-blue-600 dark:bg-green-500">
        <span>Add user</span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
      </button> */}

      <ul className="mt-2 text-white ">
        <li className="py-2 mt-8 hover:shadow hover:bg-white hover:dark:bg-gray-200 hover:rounded-full ">
          <a href="#home" className="flex pl-4">
            <svg
              className="w-5 h-5 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"
              ></path>
            </svg>
            <span className="ml-2 font-medium text-black capitalize dark:text-gray-300">
              dashboard
            </span>
          </a>
        </li>

        <li className="py-2 mt-8 hover:shadow hover:bg-white hover:dark:bg-gray-200 hover:rounded-full ">
          <a href="#home" className="flex pl-4">
            <svg
              className="w-5 h-5 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"
              ></path>
            </svg>
            <span className="ml-2 font-medium text-black capitalize dark:text-gray-300">
              calendar
            </span>
          </a>
        </li>

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

        <li className="py-2 mt-8 hover:shadow hover:bg-white hover:dark:bg-gray-200 hover:rounded-full ">
          <a href="#home" className="flex pl-4">
            <svg
              className="w-5 h-5 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"
              ></path>
            </svg>
            <span className="ml-2 font-medium text-black capitalize select-none dark:text-gray-300">
              tasks
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
