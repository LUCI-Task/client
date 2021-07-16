import React from "react";
import { render, cleanup } from "@testing-library/react";
import User from "../../index";
import reducers from "../../../../state/reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
afterEach(() => cleanup());

it("should render users without crash", () => {
  const user = {
    _id: "1",
    first_name: "Adi",
    last_name: "Ezra",
    email: "adi@gmial.com",
    selectedFile: "",
    role: "Genius",
    project: "Apollo",
    status: "Online",
    bio: "",
  };
  render(
    <Provider store={store}>
      <User user={user} />
    </Provider>
  );
});
