import React, { Component } from "react";
import { themeContext } from "../context/ThemeContext";
class ThemeToggler extends Component {
  static contextType = themeContext;
  state = {};
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toogle The Theme</button>;
  }
}

export default ThemeToggler;
