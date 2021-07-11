import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
//API
import { createUser } from "../../action/users";
import FileBase from "react-file-base64";

const Form = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    selectedFile: "",
    status: "",
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
    });
  };

  return (
    <div>
      <form
        className="bg-red-100"
        autoComplete="off"
        noValidate
        onSubmit={submitHandler}
      >
        <label>
          Name:
          <input
            className="text-black bg-gray "
            type="text"
            name="first name"
            value={userData.first_name}
            onChange={(e) =>
              setUserData({ ...userData, first_name: e.target.value })
            }
          />
          <input
            type="text"
            name="last name"
            value={userData.last_name}
            onChange={(e) =>
              setUserData({ ...userData, last_name: e.target.value })
            }
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setUserData({ ...userData, selectedFile: base64 })
          }
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
