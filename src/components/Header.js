import React from "react";

function Header({ todos, editTitle }) {
  return (
    <div className="header">
      <h1 style={{ color: editTitle ? "red" : !todos.length ? "red" : null }}>
        {editTitle
          ? " EDIT MODE"
          : `${!todos.length ? "NO TASKS!" : `CiscoTask-${todos.length}`}`}
      </h1>
    </div>
  );
}

export default Header;
