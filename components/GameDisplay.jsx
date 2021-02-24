import React from 'react';

export default function GameDisplay(){
    return(
        <>
            <div className="counters">
                <div className="amountCookies">0 Cookies</div>
                <div className="prodSpeed">0 Cookies/sec</div>
            </div>

            <div className="clickingZone">
                <div className="cookieBox">
                    <button className="cookie">Click me!</button>
                </div>
            </div>
        </>
    )
}