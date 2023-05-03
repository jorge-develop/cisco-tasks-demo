import React from "react";

export default function CiscoItem({
  handleChangeEdit,
  isHidden,
  todo,
  handleComplete,
  handleEdit,
  handleDelete,
  edit,
}) {
  return (
    <li
      className={`list-item${isHidden === todo.id ? " hidden" : ""}`}
      key={todo.id}
    >
      <input
        type="text"
        value={todo.title}
        className={`list ${edit ? "edit" : todo.completed ? "complete" : ""}`}
        onChange={e => {
          if (edit) {
            handleChangeEdit(e, todo);
          } else {
            e.preventDefault();
          }
        }}
      />

      <div>
        {!edit && (
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

            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo.id, todo.title)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </>
        )}

        {edit && (
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(null)}
          >
            <i className="fa fa-check-square-o"></i>
          </button>
        )}
      </div>
    </li>
  );
}
