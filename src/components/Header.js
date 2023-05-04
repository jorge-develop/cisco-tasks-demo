import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Header() {
  const {
    state: { list, titleEdit },
  } = useContext(GlobalContext);

  return (
    <div className="header">
      <h1 style={{ color: titleEdit ? "red" : !list?.length ? "red" : null }}>
        {titleEdit
          ? " EDIT MODE"
          : `${!list?.length ? "NO TASKS!" : `CiscoTask-${list?.length}`}`}
      </h1>
    </div>
  );
}

export default Header;
