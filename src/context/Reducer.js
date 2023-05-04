import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  EDIT_ITEM,
  EDIT_TITLE_ON,
} from "./Actions";

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return { ...state, list: [payload, ...state.list] };
    case DELETE_ITEM:
      return { ...state, list: state.list.filter(obj => obj.id !== payload) };
    case UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map(obj =>
          obj.id === payload ? { ...obj, completed: !obj.completed } : obj
        ),
      };
    case EDIT_ITEM:
      console.log(payload);
      return {
        ...state,
        list: state.list.map(obj =>
          obj.id === payload.id
            ? { ...obj, title: payload.e.target.value }
            : obj
        ),
      };
    case EDIT_TITLE_ON:
      return {
        ...state,
        titleEdit: payload,
      };
    default:
      return { ...state };
  }
};

export default Reducer;
