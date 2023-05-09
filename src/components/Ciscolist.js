import React, { useState, useContext } from "react";
import CiscoItem from "./CiscoItem";
import { GlobalContext } from "../context/GlobalContext";
import {
  deleteItem,
  updateItem,
  editItem,
  editTitleOn,
} from "../context/Actions";
import { toast } from "react-toastify";

const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};

function Ciscolist() {
  const [isHidden, setIsHidden] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const { dispatch } = useContext(GlobalContext);
  const {
    state: { list },
  } = useContext(GlobalContext);

  const handleDelete = (_id, _title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${_title}"?`
    );

    if (confirmDelete) {
      setIsHidden(_id);
      toast.success(`"${_title}" has been deleted!`, confirmStyleBox);
      // Pause for 1 second before deleting the item and showing a success message so css animation can take effect
      setTimeout(() => {
        deleteItem(_id, dispatch);
      }, 1000);
    } else {
      toast.warning(`"${_title}" was not deleted.`, confirmStyleBox);
    }
  };

  const handleComplete = _id => {
    updateItem(_id, dispatch);
  };

  const handleEdit = (id, val) => {
    setIsEdit(id);

    editTitleOn(Boolean(id), dispatch);
  };

  const handleChangeEdit = (e, ciscoObject) => {
    editItem(e, ciscoObject.id, dispatch);
  };

  const renderCiscolist = list.map(todo => (
    <CiscoItem
      key={todo.id}
      todo={todo}
      isHidden={isHidden}
      handleChangeEdit={handleChangeEdit}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      edit={isEdit === todo.id}
    />
  ));

  return <div>{renderCiscolist}</div>;
}

export default Ciscolist;
