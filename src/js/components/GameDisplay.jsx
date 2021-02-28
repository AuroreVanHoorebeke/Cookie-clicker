import React from 'react';
import '../../index.css';

import Game from './Game.jsx';

export default function GameDisplay(props){
    return(
        <>
            <div className="clickingZone bg-yellow-900 p-5 tabular-nums">
                <Game />
            </div>
        </>
    )
}
