import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
//API
import { createUser } from "../../action/users";
import FileBase from "react-file-base64";

const Form = ({ close }) => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    selectedFile: "",
    status: "",
    role: "",
    project: "",
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setUserData({
      first_name: "",
      last_name: "",
      email: "",
      selectedFile: "",
      status: "",
      role: "",
      project: "",
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      {/* <div className="absolute inset-0 z-0 bg-black opacity-60"></div> */}
      <div className="z-10 w-full max-w-md p-10 space-y-8 shadow-lg rounded-xl">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col ">
            <div className="flex flex-col items-center sm:flex-row">
              <h2 className="mr-auto text-lg font-semibold">Shop Info</h2>
              <div className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <div className="form">
                <div className="mb-3 md:space-y-2">
                  <label className="py-2 text-xs font-semibold text-gray-600">
                    Company Logo
                    <abbr className="hidden" title="required">
                      *
                    </abbr>
                  </label>
                  <div className="flex items-center py-6">
                    <div className="flex-none w-12 h-12 mr-4 overflow-hidden border rounded-xl">
                      <img
                        className="object-cover w-12 h-12 mr-4"
                        src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
                        alt="Avatar Upload"
                      />
                    </div>
                    <label className="cursor-pointer ">
                      <span className="px-4 py-2 text-sm text-white bg-green-400 rounded-full focus:outline-none hover:bg-green-500 hover:shadow-lg">
                        Browse
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        multiple="multiple"
                        accept="accept"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex-row w-full text-xs md:flex md:space-x-4">
                  <div className="w-full mb-3 space-y-2 text-xs">
                    <label className="py-2 font-semibold text-gray-600">
                      Company Name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Company Name"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="hidden text-xs text-red">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full mb-3 space-y-2 text-xs">
                    <label className="py-2 font-semibold text-gray-600">
                      Company Mail <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Email ID"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="hidden text-xs text-red">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="w-full mb-3 space-y-2 text-xs">
                  <label className="py-2 font-semibold text-gray-600 ">
                    Company Website
                  </label>
                  <div className="relative flex flex-wrap items-stretch w-full mb-4">
                    <div className="flex">
                      <span className="flex items-center justify-center w-12 h-10 px-3 text-sm text-xl leading-normal text-white whitespace-no-wrap bg-blue-300 border border-r-0 border-blue-300 rounded-lg rounded-r-none bg-grey-lighter border-1 text-grey-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="relative flex-1 flex-auto flex-grow flex-shrink w-px h-10 px-3 leading-normal border border-l-0 rounded-lg rounded-l-none border-grey-light focus:border-blue focus:shadow"
                      placeholder="https://"
                    />
                  </div>
                </div>
                <div className="w-full text-xs md:flex md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full mb-3">
                    <label className="py-2 font-semibold text-gray-600">
                      Company Address
                    </label>
                    <input
                      placeholder="Address"
                      className="block w-full h-10 px-4 border rounded-lg appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                      type="text"
                      name="integration[street_address]"
                      id="integration_street_address"
                    />
                  </div>
                  <div className="flex flex-col w-full mb-3">
                    <label className="py-2 font-semibold text-gray-600">
                      Location<abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full h-10 px-4 border rounded-lg bg-grey-lighter text-grey-darker border-grey-lighter md:w-full "
                      required="required"
                      name="integration[city_id]"
                      id="integration_city_id"
                    >
                      <option value="">Seleted location</option>
                      <option value="">Cochin,KL</option>
                      <option value="">Mumbai,MH</option>
                      <option value="">Bangalore,KA</option>
                    </select>
                    <p className="hidden mt-3 text-sm text-red-500" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="flex-auto w-full mb-1 space-y-2 text-xs">
                  <label className="py-2 font-semibold text-gray-600">
                    Description
                  </label>
                  <textarea
                    required=""
                    name="message"
                    id=""
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="Enter your comapny info"
                    spellcheck="false"
                  ></textarea>
                  <p className="my-3 text-xs text-left text-gray-400">
                    You inserted 0 characters
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
                  <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-white bg-green-400 rounded-full shadow-sm outline-none md:mb-0 hover:shadow-lg hover:bg-green-500">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* <div className="w-1/3">
       <form 
    //     className="bg-red-100"
    //     autoComplete="off"
    //     noValidate
    //     onSubmit={submitHandler}
    //   >
    //     <label>
    //       Name:
    //       <input
    //         className="text-black bg-gray "
    //         type="text"
    //         name="first name"
    //         value={userData.first_name}
    //         onChange={(e) =>
    //           setUserData({ ...userData, first_name: e.target.value })
    //         }
    //       />
    //       <input
    //         type="text"
    //         name="last name"
    //         value={userData.last_name}
    //         onChange={(e) =>
    //           setUserData({ ...userData, last_name: e.target.value })
    //         }
    //       />
    //       <input
    //         type="email"
    //         name="email"
    //         value={userData.email}
    //         onChange={(e) =>
    //           setUserData({ ...userData, email: e.target.value })
    //         }
    //       />
    //       <input
    //         type="text"
    //         name="status"
    //         value={userData.status}
    //         onChange={(e) =>
    //           setUserData({ ...userData, status: e.target.value })
    //         }
    //       />
    //       <input
    //         type="text"
    //         name="role"
    //         value={userData.role}
    //         onChange={(e) => setUserData({ ...userData, role: e.target.value })}
    //       />
    //       <input
    //         type="text"
    //         name="project"
    //         value={userData.project}
    //         onChange={(e) =>
    //           setUserData({ ...userData, project: e.target.value })
    //         }
    //       />
    //     </label>
    //     <FileBase
    //       type="file"
    //       multiple={false}
    //       onDone={({ base64 }) =>
    //         setUserData({ ...userData, selectedFile: base64 })
    //       }
    //     />
    //     <input type="submit" value="Submit" />
    //   </form>
  // </div> */
  );
};

export default Form;
