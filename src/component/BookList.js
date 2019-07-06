import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import { BookContext } from "../context/bookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(themeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  console.log(books);
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
