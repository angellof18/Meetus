import React from 'react'
import { Footer } from './Footer'
import './css/Home.css'

export const Home = ({ setPage }) => {
    return (
        <div>
            <div className='hero is-halfheight'>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-one-third">
                                <p className="title is-1 is-size-3-mobile">APLICACION DE MENSAJERIA INSTANTANEA</p><hr />
                                <p className="subtitle is-size-6-mobile">Comunicate con tus amigos, utilizando nuestra app</p>
                                <button className="button has-text-dark button-starter"
                                    onClick={() => setPage('Join')}>Get started</button>
                            </div>
                            <div className="column is-two-thirds">
                                <figure className="image is-16by9">
                                    <img src="./ban.jpg" alt="" className="banner animate__animated animate__zoomIn animate__faster" id='image-banner' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <nav className="tabs">
                        <div className="container has-text-link">
                            <ul>
                                <li>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-browser-chrome"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/angellof18" target='_blank'><i className="bi bi-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="hero is-info">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns is-vcentered">
                            <div className="column is-half">
                                <figure className="image is-16by9">
                                    <img src="./chat-bot.png" alt="" className="image"
                                        style={{ borderRadius: '15px' }} />
                                </figure>
                            </div>
                            <div className="column">
                                <div className="content has-text-centered">
                                    <p className="title is-size-1 is-size-3-mobile">
                                        Mantente en contacto con tus amigos
                                    </p>
                                    <p>Las conversaciones grupales deben ser fluidas, ya sea que planifiques una salida con amigos o simplemente te pongas al día con los chats familiares.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
