import React, { Component } from 'react';
import { themeContext } from '../context/ThemeContext';
export default class Navbar extends Component{
     static contextType = themeContext;
    render(){
        console.log(this.context);
        const {isLightTheme,light,dark}  = this.context;
        const theme = isLightTheme ? light :dark;
        return(
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Context</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Context</li>
                </ul>
            </nav>
        );
    }
}