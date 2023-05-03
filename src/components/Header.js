import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Header({ editTitle }) {
  const {
    state: { list },
  } = useContext(GlobalContext);
  return (
    <div className="header">
      <h1 style={{ color: editTitle ? "red" : !list.length ? "red" : null }}>
        {editTitle
          ? " EDIT MODE"
          : `${!list.length ? "NO TASKS!" : `CiscoTask-${list.length}`}`}
      </h1>
    </div>
  );
}

export default Header;
