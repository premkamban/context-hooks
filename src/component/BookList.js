import React, { Component } from "react";
import { themeContext } from "../context/ThemeContext";
class BookList extends Component {
  state = {};
  render() {
    return (
      <themeContext.Consumer>
        {themeContext => {
          console.log(themeContext);
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>The Habit</li>
                <li style={{ background: theme.ui }}>The lord of rings</li>
                <li style={{ background: theme.ui }}>The Da vinci code</li>
                <li style={{ background: theme.ui }}>Sherlock homes</li>
                <li style={{ background: theme.ui }}>Hooked</li>
                <li style={{ background: theme.ui }}>
                  The power of positive thinking
                </li>
              </ul>
            </div>
          );
        }}
      </themeContext.Consumer>
    );
  }
}

export default BookList;
