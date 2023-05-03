import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { addItem } from "../context/Actions.js";
import { toast } from "react-toastify";
const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};

function Form({ input, todos, setInput, setTodos }) {
  const { dispatch } = useContext(GlobalContext);
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    createNewCiscoTask();
    setInput("");
  };
  const createNewCiscoTask = () => {
    if (!input.trim()) {
      return toast.warning(`Please Insert A Task:).`, confirmStyleBox);
    }
    const newTask = {
      id: Math.random(),
      title: input.trim(),
      completed: false,
    };

    // setTodos([newTask, ...todos]);
    addItem(newTask, dispatch);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="firstName"
        value={input}
        onChange={handleChange}
        placeholder={"Enter a task... "}
        className="task-input"
      />
      <button className={"button-add"} type="submit" disabled={!input.length}>
        ADD
      </button>
    </form>
  );
}

export default Form;
