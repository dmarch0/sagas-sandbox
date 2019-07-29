import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello world</div>
    </Provider>
  );
};

export default App;
