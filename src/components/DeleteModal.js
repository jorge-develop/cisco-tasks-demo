import React, { useState } from "react";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
const confirmStyleBox = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000,
};
const DeleteModal = ({ title, id, todos, setTodos, setIsHidden }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    handleDelete(id, title);
  };

  const handleDelete = (_id, _title, confirmDelete) => {
    if (confirmDelete) {
      setModalVisible(false);
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
  return (
    <>
      <button className="button-delete task-button" onClick={openModal}>
        <i className="fa fa-trash"></i>
      </button>

      {modalVisible && (
        <div className={styles.modal}>
          <span
            onClick={closeModal}
            className={styles.close}
            title="Close Modal"
          >
            &times;
          </span>
          <div className={styles["modal-content"]}>
            <div className={styles.container}>
              <h1 style={{ color: "#f44336" }}>Delete Item</h1>
              <p style={{ color: "white" }}>
                Are you sure you want to delete "
                <span style={{ color: "#fd6969", fontWeight: "bold" }}>
                  {title}
                </span>
                "?
              </p>

              <div className={styles.clearfix}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.cancelbtn}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(id, title, modalVisible)}
                  className={styles.deletebtn}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
