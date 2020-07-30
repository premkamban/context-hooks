import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import { AuthContext } from "../component/AuthContext"
import { BookContext } from "../context/bookContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(themeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>React POC App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <div>No of books available : {books.length}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Context</li>
      </ul>
    </nav>
  );
};

export default Navbar;
