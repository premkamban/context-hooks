import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(themeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Context</li>
      </ul>
    </nav>
  );
};

export default Navbar;
