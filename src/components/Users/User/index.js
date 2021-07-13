import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";

//components
import Actions from "./Actions";

const User = ({ user }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={classNames(
        "flex justify-between px-4 py-4 mt-5 bg-white rounded-lg shadow-xl cursor-pointer ",
        {
          "bg-gray-100": isShown,
        }
      )}
    >
      <div className="flex justify-between w-full">
        <img
          className="object-cover w-12 h-12 rounded-full"
          src={
            user.selectedFile ||
            `https://robohash.org/${user.first_name}?set=set2`
          }
          alt=""
        />
        <div className="flex justify-start w-full ml-3 space-x-5 ">
          <span className="mt-2 text-black w-28 dark:text-gray-200">
            {`${user.first_name}  ${user.last_name}`}
          </span>
          <span className="mt-2 text-black w-28 dark:text-gray-200">
            {user.email}
          </span>
        </div>
        <div className={classNames("opacity-0", { "opacity-100": isShown })}>
          <Actions user={user} />
        </div>

        <div className="flex justify-end w-full mx-6 space-x-3 text-center ">
          <span className="mt-2 text-black w-28">{user.project}</span>
          <span className="mt-2 text-black w-28">{user.role}</span>
          <span
            className={classNames("mt-2 w-28", {
              "text-red-500": user.status === "Offline",
              "text-green-500": user.status === "Online",
            })}
          >
            {user.status}
          </span>
          <span className="mt-2 w-28">{moment(user.createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
