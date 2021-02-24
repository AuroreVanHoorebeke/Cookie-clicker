import React from 'react'

export default function Header(props){
        return(
        <>
            <h1>Cookie clicker</h1>
            <h2>{props.user}'s bakery</h2>
        </>
        );
}
