import React, { useState } from 'react'
import './css/Navbar.css'


export const Navbar = ({ onToggle, setPage }) => {

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    const handleToggle = () => {
        onToggle();
        const htmlClasses = document.querySelector('html').classList;
        htmlClasses.toggle('theme-dark');
    }

    return (
        <div>
            <nav className="navbar card px-3 mx-1 mt-1">
                <div className="navbar-brand">
                    <div className="navbar-item my-4" onClick={() => setPage('Inicio')}>
                        <div className="icon-text">
                            <span className="icon">
                                <i className="bi bi-chat-dots-fill"></i>
                            </span>
                            <p className="subtitle">MEETUS</p>
                        </div>
                    </div>

                    <div className={`navbar-burger ${active && 'is-active'}`} data-target='menu'
                        onClick={handleActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`navbar-menu animate__animated animate__fadeInDown animate__faster ${active && 'is-active'}`} id='menu'>
                    <div className="navbar-start">

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Tema</a>
                            <a className="navbar-dropdown">
                                <a className="navbar-item">

                                    <div className="field" onClick={handleToggle}>
                                        <div className="control">
                                            <span className="icon has-text-warning">
                                                <i className="bi bi-sun-fill" />
                                            </span>
                                            <span>  Claro</span>
                                        </div>
                                    </div>
                                </a>
                                <a className="navbar-item" onClick={handleToggle}>
                                    <div className="field">
                                        <div className="control">
                                            <span className="icon has-text-link">
                                                <i className="bi bi-moon-fill" />
                                            </span>
                                            <span>  Oscuro</span>
                                        </div>
                                    </div>
                                </a>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button is-success" onClick={() => setPage('Join')}>Unirse</button>
                        </div>
                        <div className="navbar-item">
                            <button className="button is-dark" onClick={() => setPage('Login')}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
