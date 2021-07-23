import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";
import Actions from "./Actions";

export default function User({ user }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={classNames(
        "flex justify-between sm:px-4 sm:py-4 mt-2 bg-white rounded-lg shadow-xl cursor-pointer ",
        {
          "bg-gray-100": isShown,
        }
      )}
    >
      <div className="flex justify-end w-11/12 sm:w-full sm:justify-between ">
        <img
          className="invisible object-cover w-12 h-12 rounded-full sm:visible "
          src={
            user.selectedFile ||
            `https://robohash.org/${user.first_name}?set=set2`
          }
          alt={user.first_name}
        />
        <div className="flex flex-col justify-start w-full ml-1 space-x-0 sm:ml-10 lg:ml-3 lg:space-x-5 lg:flex-row ">
          <span
            data-testid="user-data"
            className="mt-2 text-xs text-black sm:text-sm w-28 lg:text-base "
          >
            {`${user.first_name}  ${user.last_name}`}
          </span>
          <span className="mt-2 text-xs text-black sm:text-sm w-28 lg:text-base">
            {user.email}
          </span>
        </div>

        <div className={classNames("opacity-0", { "opacity-100": isShown })}>
          <Actions isShown={isShown} user={user} />
        </div>

        <div className="flex flex-col justify-end w-7/12 text-center sm:mx-6 lg:w-full lg:space-x-3 lg:flex-row">
          <span className="mt-2 text-xs text-black sm:text-sm w-28 lg:text-base ">
            {user.project}
          </span>
          <span className="mt-2 text-xs text-black sm:text-sm w-28 lg:text-base ">
            {user.role}
          </span>
          <span
            className={classNames("mt-2 w-28 text-sm lg:text-base", {
              "text-red-500": user.status === "Offline",
              "text-green-500": user.status === "Online",
            })}
          >
            {user.status}
          </span>
          <span className="mt-2 text-xs text-black sm:text-sm w-28 lg:text-base ">
            {moment(user.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
}
