import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
