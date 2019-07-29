import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import styled from "styled-components";

import reducer from "./reducers";
import sagas from "./sagas";
import UsersList from "./components/UsersList";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(sagas);

const App = ({ className }) => {
  return (
    <Provider store={store}>
      <div className={className}>
        <UsersList />
      </div>
    </Provider>
  );
};

const StyledApp = styled(App)`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default StyledApp;
