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
                            <a className="navbar-item">Unirse a un chat</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button is-dark" onClick={() => setPage('Login')}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
