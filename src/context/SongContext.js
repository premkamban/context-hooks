import React, { createContext, useReducer } from "react";
import SongReducer from "../Reducers/SongReducer.js";

export const SongContext = createContext();

const SongContextProvider = props => {
  const [songs, dispatch] = useReducer(SongReducer, []);

  return (
    <SongContext.Provider value={{ songs, dispatch }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
