import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../state/actions/users";
import classNames from "classnames";
import Form from "../../Form";

export default function Actions({ user, isShown }) {
  const admin = useSelector((state) => state.auth.authData);
  const { bio, _id, first_name, role, project, status, last_name, email } =
    user;

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col content-center w-full py-3 sm:px-6 sm:flex-row">
      {admin && (
        <>
          {/* VIew user bio */}
          <button className="relative w-4 mr-2 text-center transform outline-none group hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>

            <section class="opacity-0 w-64 sm:w-96  h-auto bg-white text-black text-center text-xs rounded-lg py-6 px-6 absolute group-hover:opacity-100 pointer-events-none -left-36 shadow-xl border-2 border-gray mt-3">
              <div class="flex photo-wrapper ">
                <img
                  class="w-12 h-12 rounded-full object-cover mx-auto bg-gray-100 mr-22"
                  src={
                    user.selectedFile ||
                    `https://robohash.org/${user.first_name}?set=set2`
                  }
                  alt={first_name}
                />
              </div>
              <div class="p-2 ">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                  {first_name} {last_name}{" "}
                  <span
                    className={classNames(
                      "inline-block w-3 h-3 rounded-full text-sm lg:text-base",
                      {
                        "bg-red-500": status === "Offline",
                        "bg-green-500": status === "Online",
                      }
                    )}
                  ></span>
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>{role}</p>
                </div>
                <table class="text-xs my-3 mx-auto">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2  font-semibold">Email:</td>
                      <td class="px-2 py-2">{email}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2  font-semibold">Project:</td>
                      <td class="px-2 py-2 text-black">{project}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2  font-semibold">About:</td>
                      <td class="px-2 py-2">
                        {bio !== ""
                          ? bio
                          : `My name is ${first_name}, and I am ${role}`}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </button>
          {/* Edit user */}
          {isShown && <Form userId={_id} />}
          {/* Delete user */}
          <button
            onClick={() => dispatch(deleteUser(_id))}
            className="w-4 mr-2 transform outline-none hover:text-purple-500 hover:scale-110 mb-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
