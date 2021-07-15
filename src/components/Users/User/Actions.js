import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../state/action/users";

//components
import Form from "../../Form";

const Actions = ({ user }) => {
  const admin = useSelector((state) => state.auth.authData);
  const { bio, _id, first_name, role } = user;
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

            <p class="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 px-1 absolute z-10 group-hover:opacity-100 bottom-full pointer-events-none -left-12">
              {bio !== "" ? bio : `My name is ${first_name}, and I am ${role}`}
              <svg
                class="absolute text-black h-2 w-full left-0 top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
              >
                <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
              </svg>
            </p>
          </button>
          {/* Edit user */}
          <Form userId={_id} />
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
};

export default Actions;
