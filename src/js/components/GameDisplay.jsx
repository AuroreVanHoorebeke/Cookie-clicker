import React from 'react';
import '../../index.css';

import Game from './Game.jsx';
import '../../index.css';

export default function GameDisplay(props){
    return(
        <>
            <div className="clickingZone bg-yellow-900 p-5 tabular-nums justify-self-center">
                <Game />
            </div>
        </>
    )
}
