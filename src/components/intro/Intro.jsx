import React, { useEffect, useRef } from 'react'
import '../intro/intro.css'
import {ArrowDownwardIcon} from '@material-ui/icons'
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

useEffect(() => {
    init(textRef.current, {
        showCursor: true,
        backDelay:1500,
        backSpeed:60,
        strings: ['creating', 'learning' , 'growing', 'having fun' , 'thinking new ideas']
    });
},[])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className="imgContainer">
                    <img src="assets/fotodeperfil.png" alt="" />
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Axel Brigo</h1>
                    <h3>I never stop <span ref={textRef}></span></h3>
                </div>
                <a href="#works">
                    <img src="assets/arrowdown.png" alt="" />
                </a>
            </div>
        </div>
    )
}
