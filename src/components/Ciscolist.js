import React, { useState } from "react";
import CiscoItem from "./CiscoItem";
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
      <CiscoItem
        key={todo.id}
        todo={todo}
        isHidden={isHidden}
        handleChangeEdit={handleChangeEdit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        edit={true}
      />
    ) : (
      <CiscoItem
        key={todo.id}
        todo={todo}
        isHidden={isHidden}
        handleChangeEdit={handleChangeEdit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        edit={false}
      />
    )
  );

  return <div>{renderCiscolist}</div>;
}

export default Ciscolist;
