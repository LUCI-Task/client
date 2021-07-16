import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ReactDom from "react-dom";
import reducers from "./state/reducers/index";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

test("it runs without crash", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
