import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Ciscolist from "./components/Ciscolist";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <ToastContainer />
          <Ciscolist />
        </div>
      </div>
    </div>
  );
};

export default App;
