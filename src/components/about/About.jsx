import React from 'react'
import '../about/about.css'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='about__container'>
                        <p>I am a firm believer in the mobile-first, <strong>dynamic pages</strong> </p>
                    <p>and <strong>easy-to-use</strong> approach.</p>
                    <p>I define myself as a practical person in every field of my life,</p>
                    <p>always trying to find ways to <strong>solve problems</strong> as fast and easy as possible.</p>
                    <p>I'm always looking for <strong>expanding my knowledge</strong>,</p>
                    <p>logical thinking, coding skills, development tools and</p>
                    <p><strong>use my past experience to face the differents challenges</strong></p>
                    <p>that may appear along the way.</p>
                    <p>I've read that great players win games, but <strong>great teams win championships</strong>.</p>
                    <p> I like that point of view and that's why I try to adapt perfectly to <strong>teamwork</strong>,</p> 
                    <p>understanding that not only technical skills and academic education are important,</p> 
                    <p>but also <strong>personal backgrounds and different optics to face a problem are the key to success.</strong></p>
                    <p>My favorite quote is <strong>"Never stop learning"</strong></p>
                    <p>as I believe that's the only way to constantly stay competitive and expand the range of my possibilities.</p>
            </div>

            <div className='about__container--img'>
                <div className='container__img'>
                    <img src="assets/robot.png" alt="" />

                </div>
              
          
            </div>
        

        </div>
    )
}
