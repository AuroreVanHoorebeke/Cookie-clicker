import React from 'react';

import CookieButton from './CookieButton.jsx';
import Game from './Game.jsx';

export default function GameDisplay(props){
    return(
        <>
            <div className="clickingZone">
                <Game />
            </div>
        </>
    )
}
