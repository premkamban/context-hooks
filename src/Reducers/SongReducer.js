

const SongReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        {
          title: action.song.title,
          id: state.size + 1
        }
      ];
    case "REMOVE_SONG":
      return state.filter(song => song.id !== action.id);
    default:
      return state;
  }
};

export default SongReducer;
