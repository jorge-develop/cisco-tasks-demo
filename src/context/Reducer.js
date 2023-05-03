import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./Actions";

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
          obj.id === payload ? { ...obj, done: !obj.done } : obj
        ),
      };
    default:
      return { ...state };
  }
};

export default Reducer;
