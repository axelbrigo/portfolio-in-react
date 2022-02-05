import React from 'react'
import '../works/works.css'




export default function Works() {
    return (
        <div className='works' id='works'>
            <div className='div__projects'>
                <h1 className='projects'>PROJECTS</h1>
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
                                <p>SPACE X</p>


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
                                <a className='button__works' type="button" href="https://space-app-six.vercel.app/" target="_blank"> Check it</a>
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
                                <a className='button__works' type="button" href="https://flags-project.vercel.app/" target="_blank">Check it</a>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='works__center'>
                    <div className="card">
                        <div className='father__card--image'>
                            <div className="card-image">
                                <img src="assets/tetris.png" alt="" />
                            </div>
                        </div>

                        <div className='div__works--info'>
                            <div className="card-title">
                                <p>TETRIS GAME</p>
                            </div>
                            <div className="card-subtitle">
                                <p>JavaScript Vanilla</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/axelbrigo/Tetris-project" target="_blank">
                                    <i class="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="learn-btn">
                                <a className='button__works' type="button" href="https://tetris-project-chywbf458-axelbrigo.vercel.app/" target="_blank">Check it</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='works__center'>
                    <div className="card">
                        <div className='father__card--image'>
                            <div className="card-image">
                                <img src="assets/ecomerce.png" alt="" />
                            </div>
                        </div>

                        <div className='div__works--info'>
                            <div className="card-title">
                                <p>E-commerce</p>
                            </div>
                            <div className="card-subtitle">
                                <p>ReactJs | Library</p>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/axelbrigo/ecomerce" target="_blank">
                                    <i class="fab fa-github icon"></i>
                                </a>
                            </div>
                            <div className="learn-btn">
                                <a className='button__works' type="button" href="https://ecomerce-kbah9lv07-axelbrigo.vercel.app/" target="_blank"> Check it</a>
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
                                <p>RESTAURANT</p>
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
                                <a className='button__works' type="button" href="https://restaurant-retro.vercel.app/" target="_blank">Check it</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}
