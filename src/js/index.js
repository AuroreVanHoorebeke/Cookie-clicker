import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import Header from './components/Header.jsx'
import GameDisplay from './components/GameDisplay.jsx'

const app = document.querySelector("#app");
//let user = prompt("Hello there, what's your name?");

ReactDOM.render(
    <>
        <Header user='Aurore'/>

        <GameDisplay />
    </>,
    app
);