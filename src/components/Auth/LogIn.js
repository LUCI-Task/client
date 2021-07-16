import React from "react";
import { GoogleLogin } from "react-google-login";

//redux
import { useDispatch } from "react-redux";
import { LOGIN } from "../../state/types";

const LogIn = () => {
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: LOGIN, data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (response) => console.log(response);
  console.log(process.env.REACT_APP_GOOGLE_ID);
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_ID}
      render={(renderProps) => (
        <button
          className="flex items-center justify-center px-2 py-3 mt-8 font-bold bg-white rounded-lg shadow outline-none dark:text-gray-200 "
          color="primary"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          variant="contained"
        >
          <i className="px-3 mx-4 text-yellow-700 fab fa-google">
            <span className="pl-2 ">Login</span>
          </i>
        </button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy="single_host_origin"
    />
  );
};

export default LogIn;
