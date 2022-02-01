import React from 'react'
import '../works/works.css'




export default function Works() {
    return (
        <div className='works' id='works'>
            <div>
                <h1>PROJECTS</h1>
            </div>

            <div className='main__works'>
                <div className='works__left'>
                    <div className="card">
                        <div className='father__card--image'>
                            <div className="card-image">
                                <img src="assets/space.png" alt="" />
                            </div>
                        </div>

                        <div className='div__works--info'>
                            <div className="card-title">
                                <p>Space X</p>
                            </div>
                            <div className="card-subtitle">
                                <p>ReactJs</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/axelbrigo/spaceApp" target="_blank">
                                    <i class="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="learn-btn">
                                <button className='button__works' type="button"><a href="https://space-app-six.vercel.app/" target="_blank"> Check it out</a></button>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='works__center'>
                    <div className="card">
                        <div className='father__card--image'>
                            <div className="card-image">
                                <img src="assets/flags.png" alt="" />
                            </div>
                        </div>

                        <div className='div__works--info'>
                            <div className="card-title">
                                <p>API - THEMING</p>
                            </div>
                            <div className="card-subtitle">
                                <p>ReactJs</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/axelbrigo/flags-project" target="_blank">
                                    <i class="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="learn-btn">
                                <button className='button__works' type="button"><a href="https://flags-project.vercel.app/" target="_blank"> Check it out</a></button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='works__right'>
                    <div className="card">
                        <div className='father__card--image'>
                            <div className="card-image">
                                <img src="assets/restaurant.png" alt="" />
                            </div>
                        </div>

                        <div className='div__works--info'>
                            <div className="card-title">
                                <p>Restaurant Retro</p>
                            </div>
                            <div className="card-subtitle">
                                <p>ReactJs</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/axelbrigo/restaurantRetro" target="_blank">
                                    <i class="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="learn-btn">
                                <button className='button__works' type="button"><a href="https://restaurant-retro.vercel.app/" target="_blank"> Check it out</a></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
