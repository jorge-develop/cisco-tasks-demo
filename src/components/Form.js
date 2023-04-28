import React from "react";
import { toast } from "react-toastify";
const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};

function Form({ input, todos, setInput, setTodos }) {
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

    setTodos([newTask, ...todos]);
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
