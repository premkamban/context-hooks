

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          id: state.size + 1
        }
      ];
    case "Remove_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
