import React from 'react'

export default function Header(props){
        return(
        <>
            <div className="header flex flex-row justify-between">
                <div className="m-5">Cookie clicker</div>
                <div className="m-5">{props.user}'s bakery</div>
            </div>
        </>
        );
}
