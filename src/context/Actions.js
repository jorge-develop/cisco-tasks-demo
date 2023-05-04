export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const EDIT_TITLE_ON = "EDIT_TITLE_ON";

export const addItem = (payload, dispatch) => {
  return dispatch({
    type: ADD_ITEM,
    payload,
  });
};

export const deleteItem = (payload, dispatch) =>
  dispatch({
    type: DELETE_ITEM,
    payload,
  });

export const updateItem = (payload, dispatch) =>
  dispatch({
    type: UPDATE_ITEM,
    payload,
  });

export const editItem = (e, id, dispatch) => {
  dispatch({
    type: EDIT_ITEM,
    payload: { e, id },
  });
};

export const editTitleOn = (payload, dispatch) => {
  dispatch({
    type: EDIT_TITLE_ON,
    payload,
  });
};
