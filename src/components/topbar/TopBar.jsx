import React from 'react'
import './topbar.css'
import {PhoneIphone, Mail} from '@material-ui/icons'


export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>AXELBRIGO.COM</a>
                    <div className="itemContainer">
                        <PhoneIphone className="icon" />
                        <span>+34 604 12 07 23</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>developer@axelbrigo.com</span>
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
