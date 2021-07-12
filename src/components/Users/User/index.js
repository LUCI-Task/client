import React from "react";

import moment from "moment";

const User = ({ user }) => {
  return (
    <div className="flex justify-between px-4 py-4 mt-2 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-600 ">
      <div className="flex justify-between w-full">
        <img
          className="object-cover w-12 h-12 rounded-full"
          src="https://inews.gtimg.com/newsapp_match/0/8693739867/0"
          alt=""
        />
        <div className="flex pl-10 space-x-12">
          <div className="flex flex-col text-gray-600 capitalize dark:text-gray-400">
            <span className="mt-2 text-black dark:text-gray-200">
              {`${user.first_name}  ${user.last_name}`}
            </span>
          </div>

          <div className="flex flex-col text-gray-600 dark:text-gray-400 ">
            <span className="mt-2 text-black dark:text-gray-200">
              {user.email}
            </span>
          </div>
        </div>

        <div className="flex justify-end w-full ">
          <div className="flex flex-col w-20 mr-16 text-center text-gray-600 capitalize dark:text-gray-400">
            {/* <span>project</span> */}
            <span className="mt-2 text-black dark:text-gray-200">
              {user.project}
            </span>
          </div>

          <div className="flex flex-col w-20 mr-16 text-center text-gray-600 capitalize dark:text-gray-400">
            {/* <span>role</span> */}
            <span className="mt-2 text-black dark:text-gray-200">
              {user.role}
            </span>
          </div>

          <div className="flex flex-col mr-16 text-gray-600 capitalize w-22 dark:text-gray-400">
            {/* <span>status</span> */}
            <span className="mt-2 text-green-500 dark:text-gray-200">
              {user.status}
            </span>
          </div>

          <div className="flex flex-col mr-8 text-center text-gray-600 capitalize w-22 dark:text-gray-400">
            {/* <span>joined</span> */}
            <span className="mt-2 dark:text-green-200">
              {moment(user.createdAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
