import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(thunk))
  );

  return store;
}
