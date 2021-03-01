import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import GameDisplay from './components/GameDisplay.jsx'

const app = document.querySelector("#app");
let user = prompt("Hello there, what's your name?");
alert(`Hello, ${user}! Have fun playing my version of cookie clicker!`)

ReactDOM.render(
    <>
        <Header user={user}/>

        <GameDisplay />
    </>,
    app
);