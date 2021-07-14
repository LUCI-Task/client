import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//API
import { createUser, updateUser } from "../../state/action/users";

import FileBase from "react-file-base64";
import classNames from "classnames";

const Form = ({ close, userId }) => {
  const dispatch = useDispatch();
  const existingUser = useSelector((state) =>
    userId ? state.users.find((u) => u._id === userId) : null
  );
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    selectedFile: "",
    role: "",
    project: "",
    status: "" || "Online",
    bio: "",
  });

  useEffect(() => {
    if (userId) setUserData(existingUser);
  }, [existingUser, userId]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (existingUser) {
      dispatch(updateUser(userId, userData));
    } else {
      dispatch(createUser(userData));
    }
    setUserData({
      first_name: "",
      last_name: "",
      email: "",
      selectedFile: "",
      role: "",
      project: "",
      status: "",
      bio: "",
    });
    close();
  };

  return (
    <div className="relative flex items-center justify-center h-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="z-10 w-full max-w-md p-10 space-y-8 shadow-lg rounded-xl">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col ">
            <div className="flex flex-col items-center self-center sm:flex-row">
              <h2 className="mr-auto text-2xl font-semibold">
                {userId ? `Edit User Information!` : ` Add User!`}
              </h2>
              <div className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <form onSubmit={submitHandler} className="form">
                <div className="mb-3 md:space-y-2">
                  <div className="flex items-center py-6">
                    <div className="flex-none w-20 h-20 mr-4 overflow-hidden border rounded-xl">
                      <img
                        className="object-cover w-20 h-20 mr-4"
                        src={
                          userData.selectedFile ||
                          `https://robohash.org/${userData.first_name}?set=set2`
                        }
                        alt={userData.first_name}
                      />
                    </div>

                    <label className="outline-none cursor-pointer">
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setUserData({ ...userData, selectedFile: base64 })
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="flex-row w-full text-xs md:flex md:space-x-4">
                  <div className="w-full mb-3 space-y-2 text-xs">
                    <label className="py-2 font-semibold text-gray-600">
                      First Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="John"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      required="required"
                      type="text"
                      name="first name"
                      value={userData.first_name}
                      onChange={(e) =>
                        setUserData({ ...userData, first_name: e.target.value })
                      }
                    />
                    <p className="hidden text-xs text-red">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full mb-3 space-y-2 text-xs">
                    <label className="py-2 font-semibold text-gray-600">
                      Last Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Doe"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      required="required"
                      type="text"
                      name="last name"
                      value={userData.last_name}
                      onChange={(e) =>
                        setUserData({ ...userData, last_name: e.target.value })
                      }
                    />
                    <p className="hidden text-xs text-red">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="flex-row w-full text-xs md:flex md:space-x-4">
                  <div className="w-full mb-3 space-y-2 text-xs">
                    <label className="py-2 font-semibold text-gray-600">
                      Email <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="youremail@domain.com"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      required="required"
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                    <p className="hidden text-xs text-red">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="w-full text-xs md:flex md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full mb-3">
                    <label className="py-2 font-semibold text-gray-600">
                      Project<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full h-10 px-4 border rounded-lg bg-grey-lighter text-grey-darker border-grey-lighter md:w-full "
                      required="required"
                      value={userData.project}
                      onChange={(e) =>
                        setUserData({ ...userData, project: e.target.value })
                      }
                    >
                      {[
                        null,
                        "Apollo",
                        "Code Talkers",
                        "Titan",
                        "Manhattan Project",
                        "Code Talkers",
                        "Durango",
                        "Project 404",
                        "Project Hanks",
                        "Project Blue Book",
                        "X Lab",
                      ].map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <p className="hidden mt-3 text-sm text-red-500" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label className="py-2 font-semibold text-gray-600">
                      Role<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full h-10 px-4 border rounded-lg bg-grey-lighter text-grey-darker border-grey-lighter md:w-full "
                      required="required"
                      value={userData.role}
                      onChange={(e) =>
                        setUserData({ ...userData, role: e.target.value })
                      }
                    >
                      {[
                        null,
                        "Software engineer",
                        "Data scientist",
                        "IT security specialist",
                        "Network administrator",
                        "Quality Assurance",
                        "Human resources",
                        "QA Test Engineer",
                        "Chief Troublemaker",
                        "Digital prophet",
                        "Ambassador of buzz",
                        "Master of Disaster",
                        "Ethical Hacking",
                        "Genius",
                        "VP of Misc. Stuff",
                        "Sous chef",
                      ].map((role) => (
                        <option value={role} key={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    <p className="hidden mt-3 text-sm text-red-500" id="error">
                      Please fill out this field.
                    </p>
                  </div>

                  <div
                    className={classNames("flex flex-col w-full mb-3", {
                      " hidden": !existingUser,
                    })}
                  >
                    <label className="py-2 font-semibold text-gray-600">
                      Status<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full h-10 px-4 border rounded-lg bg-grey-lighter text-grey-darker border-grey-lighter md:w-full "
                      value={userData.status}
                      onChange={(e) =>
                        setUserData({ ...userData, status: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Change status
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p className="hidden mt-3 text-sm text-red-500" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="flex-auto w-full mb-1 space-y-2 text-xs">
                  <label className="py-2 font-semibold text-gray-600">
                    About
                  </label>
                  <textarea
                    name="about"
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="me, myself and I"
                    maxLength={100}
                    value={userData.bio}
                    onChange={(e) =>
                      setUserData({ ...userData, bio: e.target.value })
                    }
                  ></textarea>
                  <p className="my-3 text-xs text-left text-gray-400">
                    You inserted {userData.bio.trim().length}/100 characters
                  </p>
                </div>
                <p className="my-3 text-xs text-right text-red-500">
                  Required fields are marked with an asterisk{" "}
                  <abbr title="Required field">*</abbr>
                </p>
                <div className="flex flex-col-reverse mt-5 text-right md:space-x-3 md:block">
                  <button
                    onClick={close}
                    className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-gray-600 bg-white border rounded-full shadow-sm outline-none md:mb-0 hover:shadow-lg hover:bg-gray-100"
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                  <button
                    type="submit"
                    value="Submit"
                    className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-white bg-green-400 rounded-full shadow-sm outline-none md:mb-0 hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
