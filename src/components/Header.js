import React from "react";

function Header({ todos, isEdit }) {
  return (
    <div className="header">
      <h1 style={{ color: isEdit ? "red" : !todos.length ? "red" : null }}>
        {isEdit
          ? " EDIT MODE"
          : `${!todos.length ? "NO TASKS!" : `CiscoTask-${todos.length}`}`}
      </h1>
    </div>
  );
}

export default Header;
