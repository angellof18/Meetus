import React, { useState } from 'react'
import './css/Navbar.css'


export const Navbar = ({ onToggle, setPage, user }) => {

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
                        <a className="navbar-item" onClick={() => setPage('Join')}>Unirse a un chat</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">

                            <div class="navbar-link">
                                <span class="icon">
                                    <i class="bi bi-person-square" />
                                </span>
                                <span>{user}</span>
                            </div>

                            <div className="navbar-dropdown">
                                <a className="navbar-item"
                                    onClick={() => setPage('Login')}>
                                    Logout
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
