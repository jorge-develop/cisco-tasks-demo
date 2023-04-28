import React, { useState } from "react";
import { toast } from "react-toastify";

const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};

function Ciscolist({ todos, setTodos, setEditTitle, editTitle }) {
  const [isHidden, setIsHidden] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const handleDelete = (_id, _title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${_title}"?`
    );

    if (confirmDelete) {
      setIsHidden(_id);
      toast.success(`"${_title}" has been deleted!`, confirmStyleBox);
      // Pause for 1 second before deleting the item and showing a success message so css animation can take effect
      setTimeout(() => {
        const filterVal = todos.filter(obj => obj.id !== _id);
        setTodos(filterVal);
      }, 1000);
    } else {
      toast.warning(`"${_title}" was not deleted.`, confirmStyleBox);
    }
  };

  const handleComplete = id => {
    const mapValue = todos.map(todoObj =>
      todoObj.id === id
        ? { ...todoObj, completed: !todoObj.completed }
        : todoObj
    );

    setTodos(mapValue);
  };

  const handleEdit = id => {
    setIsEdit(id);
    setEditTitle(Boolean(id));
  };

  const handleChangeEdit = (e, ciscoObject) => {
    const mapValue = todos.map(obj =>
      obj.id === ciscoObject.id ? { ...obj, title: e.target.value } : obj
    );
    setTodos(mapValue);
  };

  const renderCiscolist = todos.map(todo =>
    isEdit === todo.id ? (
      <li
        className={`list-item${isHidden === todo.id ? " hidden" : ""}`}
        key={todo.id}
      >
        <input
          type="text"
          value={todo.title}
          className="list edit"
          onChange={e => handleChangeEdit(e, todo)}
        />
        <div>
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(null)}
          >
            <i className="fa fa-check-square-o"></i>
          </button>
        </div>
      </li>
    ) : (
      <li
        className={`list-item${isHidden === todo.id ? " hidden" : ""}`}
        key={todo.id}
      >
        <input
          type="text"
          value={todo.title}
          className={`list ${todo.completed ? "complete" : null}`}
          onChange={e => e.preventDefault()}
        />
        <div>
          <button
            className="button-complete task-button"
            onClick={() => handleComplete(todo.id)}
          >
            <i className="fa fa-check-circle"></i>
          </button>
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(todo.id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="button-delete task-button"
            onClick={() => handleDelete(todo.id, todo.title)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    )
  );

  return <div>{renderCiscolist}</div>;
}

export default Ciscolist;
