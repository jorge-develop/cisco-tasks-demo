import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Ciscolist from "./components/Ciscolist";
import "./App.css";

const LOCAL_STORAGE_KEY = "cisco-todos";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [isEdit, setIsEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header todos={todos} isEdit={Boolean(isEdit)} />
        </div>
        <div>
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <ToastContainer />
          <Ciscolist
            todos={todos}
            setTodos={setTodos}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
