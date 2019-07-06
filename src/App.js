import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import BookList from './component/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggler from './component/ThemeToggler';
import AuthContextProvider from './component/AuthContext'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>        
      <Navbar/>
      <BookList/>
      <ThemeToggler/>
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
