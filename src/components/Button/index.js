import React from "react";

const Button = (props) => {
  return (
    <button
      data-testid="custom_button"
      onClick={props.action}
      className={`bg-white inline-flex text-gray-800 font-bold rounded border-b-4  hover:text-white shadow-md py-2 px-6 items-center capitalize outline-none ${props.styles}`}
    >
      <span data-testid="custom_button_span">{props.text}</span>
      {props.svg && <props.svg></props.svg>}
    </button>
  );
};

export default Button;
