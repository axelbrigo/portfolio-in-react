import React from 'react'
import '../menu/menu.css'


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={(() => setMenuOpen(false))}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={(() => setMenuOpen(false))}>
                    <a href='#about'>About</a>
                </li>
                <li onClick={(() => setMenuOpen(false))}>
                    <a href='#works'>Works</a>
                </li>
                <li onClick={(() => setMenuOpen(false))}>
                    <a href='#technologies'>Skills</a>
                </li>
                <li onClick={(() => setMenuOpen(false))}>
                    <a href='/assets/axelbrigocv.pdf' download="Axel Brigo CV">Resume</a>
                </li>
            </ul>

        </div>
    )
}
