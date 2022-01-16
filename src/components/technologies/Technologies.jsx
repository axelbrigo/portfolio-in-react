import React from 'react'
import '../technologies/technologies.css'

export default function Technologies() {
    return (
        <div className='technologies' id='technologies'>
            <div className='skills'>My Skills</div>

            <div className='flexbox__skills'>
                <div className='skill'><img src="assets/html.png" alt="" /></div>
                <div className='skill'><img src="assets/css.png" alt="" /></div>
                <div className='skill'><img src="assets/javascript.png" alt="" /></div>
                <div className='skill'><img src="assets/react.png" alt="" /></div>
                <div className='skill'><img src="assets/github.png" alt="" /></div>
                <div className='skill'><img src="assets/materialui.png" alt="" /></div>
            </div>
            <div className="footer">
                <div className='footer__contact'>Email: developer@axelbrigo.com</div>
                <div className='footer__contact'>Phone: +34 604 12 07 23</div>
            </div>
            
        </div>
    )
}
