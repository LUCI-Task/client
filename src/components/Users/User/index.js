import React from "react";

const User = () => {
  return (
    <div className="flex justify-between px-4 py-4 mt-2 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-600 ">
      {/* <!-- Card --> */}

      <div className="flex justify-between">
        {/* <!-- Left side --> */}

        <img
          className="object-cover w-12 h-12 rounded-full"
          src="https://inews.gtimg.com/newsapp_match/0/8693739867/0"
          alt=""
        />

        <div className="flex flex-col ml-4 text-gray-600 capitalize dark:text-gray-400">
          <span>name</span>
          <span className="mt-2 text-black dark:text-gray-200">
            name lastname
          </span>
        </div>

        <div className="flex flex-col ml-12 text-gray-600 dark:text-gray-400">
          <span className="capitalize">email</span>
          <span className="mt-2 text-black dark:text-gray-200">
            email@gmial.com
          </span>
        </div>
      </div>

      <div className="flex">
        {/* <!-- Rigt side --> */}

        <div className="flex flex-col mr-16 text-gray-600 capitalize dark:text-gray-400">
          <span>project</span>
          <span className="mt-2 text-black dark:text-gray-200">Aero treck</span>
        </div>

        <div className="flex flex-col mr-16 text-gray-600 capitalize dark:text-gray-400">
          <span>role</span>
          <span className="mt-2 text-black dark:text-gray-200">Designer</span>
        </div>

        <div className="flex flex-col mr-16 text-gray-600 capitalize dark:text-gray-400">
          <span>status</span>
          <span className="mt-2 text-green-500 dark:text-gray-200">Online</span>
          {/* <span className="text-red-600 dark:text-red-400">Offline</span> */}
        </div>

        <div className="flex flex-col mr-8 text-gray-600 capitalize dark:text-gray-400">
          <span>joined</span>
          <span className="mt-2 text-green-500 dark:text-green-200">
            20.02.2020
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
