import uuid from "uuid/v1";

const SongReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        {
          title: action.song.title,
          id: uuid()
        }
      ];
    case "REMOVE_SONG":
      return state.filter(song => song.id !== action.id);
    default:
      return state;
  }
};

export default SongReducer;
