import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setSongs] = useState([
    { id: 1, title: "The Habit" },
    { id: 2, title: "The lord of rings" },
    { id: 3, title: "The Da vinci code" },
    { id: 4, title: "Sherlock homes" },
    { id: 5, title: "Hooked" },
    { id: 6, title: "The power of positive thinking" }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
