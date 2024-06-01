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
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="bi bi-whatsapp"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="bi bi-github"></i></a>
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
                            <div className="column is-half px-5">
                                <span className="title is-size-1 is-size-3-mobile">
                                    <p>Expresate<p className='has-text-link'>con libertad</p></p>
                                </span>
                                <p>El cifrado de extremo a extremo protege tus llamadas y mensajes personales. Solo tú y la persona con quien hables podrán leer o escuchar lo que se envía, y nadie más, ni siquiera <span className="subtitle">Meetus</span>.</p>
                            </div>
                            <div className="column">
                                <img src="./cifrado.jpg" alt="" className="image"
                                    style={{ borderRadius: '5%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero">
                <div className="hero-body">
                    <div className="content">
                        <div className="columns is-vcentered">
                            <div className="column is-half">
                                <img src="./chat-bot.png" alt="" className="image"
                                    style={{ borderRadius: '5%' }} />
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