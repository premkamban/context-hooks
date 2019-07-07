import uuid from "uuid/v1";

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          id: uuid()
        }
      ];
    case "Remove_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
