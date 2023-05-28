import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

function Ciscolist({ todos, setTodos, setIsEdit, isEdit }) {
  const [isHidden, setIsHidden] = useState(null);

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
  };

  const handleChangeEdit = (e, _id) => {
    const mapValue = todos.map(obj =>
      obj.id === _id ? { ...obj, title: e.target.value } : obj
    );
    setTodos(mapValue);
  };

  const renderCiscolist = todos.map(todo => {
    const isBeingEdited = isEdit === todo.id;
    const isHiddenClass = isHidden === todo.id ? "hidden" : "";
    return (
      <li className={`list-item ${isHiddenClass}`} key={todo.id}>
        <input
          type="text"
          value={todo.title}
          className={`list ${isBeingEdited ? "edit" : ""} ${
            todo.completed ? "complete" : ""
          }`}
          onChange={e => handleChangeEdit(e, todo.id)}
          readOnly={!isBeingEdited}
        />

        <div>
          {isBeingEdited ? (
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(null)}
            >
              <i className="fa fa-check-square-o"></i>
            </button>
          ) : (
            <>
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
              <DeleteModal
                className="fa fa-trash"
                title={todo.title}
                id={todo.id}
                setIsHidden={setIsHidden}
                todos={todos}
                setTodos={setTodos}
              />
            </>
          )}
        </div>
      </li>
    );
  });

  return <div>{renderCiscolist}</div>;
}

export default Ciscolist;
