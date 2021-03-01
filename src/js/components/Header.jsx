import React from 'react'

export default function Header(props){
        return(
        <>
            <div className="header text-2xl flex flex-row justify-between rounded-t-md bg-yellow-50 mt-10">
                <div className="m-5">Cookie clicker</div>
                <div className="m-5">{props.user}'s bakery</div>
            </div>
        </>
        );
}
