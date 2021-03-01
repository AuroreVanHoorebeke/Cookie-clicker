import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faCookie} from "@fortawesome/free-solid-svg-icons";

export default function Footer(props){
    return(
        <>
            <div className="footer flex flex-row justify-between rounded-b-md bg-yellow-50 mb-10">
                <div className="m-5">Cooked with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/AuroreVanHoorebeke">me</a></div>
                <div className="m-5">Inspired by the original <a href="https://orteil.dashnet.org/cookieclicker/">Cookie Clicker</a> <FontAwesomeIcon icon={faCookie} /></div>
            </div>
        </>
    );
}