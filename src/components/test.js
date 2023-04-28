import React, { useState } from "react";
import { toast } from "react-toastify";
const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};
function Ciscolist({ setTodos, todos, setEditTitle, editTitle }) {
  const [isHidden, setIsHidden] = useState(null); // Add isHidden state
  const [isEdit, setIsEdit] = useState(null);
  const handleDelete = (_id, _title) => {
    // Display a confirmation dialog to the user
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${_title}"?`
    );
    if (confirmDelete) {
      setIsHidden(_id);
      toast.success(`"${_title}" has been deleted!`, confirmStyleBox);
      // Pause for 1 second before deleting the item and showing a success message
      setTimeout(() => {
        const filterVal = todos.filter(obj => obj.id !== _id);
        setTodos(filterVal);
      }, 1000);
    } else {
      // Show a cancel message
      toast.warning(`"${_title}" was not deleted.`, confirmStyleBox);
    }
  };
  const handleComplete = _id => {
    const mapValue = todos.map(cisco => {
      return cisco.id === _id
        ? { ...cisco, completed: !cisco.completed }
        : cisco;
    });

    setTodos(mapValue);
  };
  const handleEdit = _id => {
    if (_id) {
      setIsEdit(_id);
      setEditTitle(true);
    } else {
      setIsEdit(_id);
      setEditTitle(false);
    }
  };
  const handleChangeEdit = (e, ciscoObject) => {
    const mapValue = todos.map(obj => {
      return obj.id === ciscoObject.id
        ? { ...obj, title: e.target.value }
        : obj;
    });
    setTodos(mapValue);
  };
  const renderCiscolist = todos.map(cisco => {
    console.log("testing....");
    return isEdit === cisco?.id ? (
      <li
        className={`list-item${isHidden === cisco.id ? " hidden" : ""}`}
        key={cisco.id}
      >
        <input
          type="text"
          value={cisco.title}
          className={`list edit`}
          onChange={e => handleChangeEdit(e, cisco)}
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
        className={`list-item${isHidden === cisco.id ? " hidden" : ""}`}
        key={cisco.id}
      >
        <input
          type="text"
          value={cisco.title}
          className={`list ${cisco.completed ? "complete" : null}`}
          // onChange={e => e.preventDefault()}
          //readOnly
        />
        <div>
          <button
            className="button-complete task-button"
            onClick={() => handleComplete(cisco.id)}
          >
            <i className="fa fa-check-circle"></i>
          </button>
          <button
            className="button-edit task-button"
            onClick={() => handleEdit(cisco.id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="button-delete task-button"
            onClick={() => handleDelete(cisco.id, cisco.title)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    );
  });
  return <div>{renderCiscolist}</div>;
}

export default Ciscolist;
