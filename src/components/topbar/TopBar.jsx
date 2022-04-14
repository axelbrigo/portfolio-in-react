import React from 'react'
import './topbar.css'



export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>AXELBRIGO.COM</a>
                    <div className="itemContainer">
                        <i className="fas fa-phone-square icon"></i>
                        <span>+45 31886168</span>
                    </div>
                    <div className="itemContainer">
<<<<<<< HEAD
                        <i class="fas fa-envelope icon"></i>
=======
                    <i class="fas fa-envelope icon"></i>
>>>>>>> 99e24b84cf6de921fb1197ee7db2b4a15433043c
                        <span>theaxelbrigo@gmail.com</span>
                    </div>
                </div>
                <div className='righ'>
                    <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
