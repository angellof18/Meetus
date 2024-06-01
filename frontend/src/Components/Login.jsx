import React, { useState } from 'react'
import Axios from 'axios'
import './css/Login.css'
import { SHA256 } from 'crypto-js'

export const Login = ({ setPage, setUser }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const cleanInputs = () => {
        setUsuario('')
        setPassword('')
    }

    const login = () => {
        Axios.post('/login', {
            usuario: usuario
        }).then((response) => {
            const user = response.data[0] ? response.data[0].usuario : ''
            const pass = response.data[0] ? response.data[0].password : ''

            if (user === usuario && SHA256(password).toString() === pass) {
                setPage('Inicio')
                setUser(user)
            } else {
                alert('El usuario o la contraseña es incorrecta')
            }
            cleanInputs()
        })
    }

    return (
        <div className='hero is-fullheight'>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third">

                            <p className='subtitle is-size-1 has-text-centered'>MEETUS</p>
                            <hr />
                            <p className="has-text-centered">INICIA SESION</p>

                            <div className="field">
                                <div className="control has-icons-left">
                                    <input type="text" className="input" value={usuario}
                                        onChange={e => setUsuario((e.target.value).toUpperCase())} />
                                    <span className="icon is-small is-left">
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className="help">Ingresa tu nombre de usuario</span>
                                </div>
                            </div>

                            <div className="field">
                                <p className="control has-icons-left">
                                    <input type="password" className="input" value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        onKeyUp={e => {
                                            if (e.key === 'Enter') {
                                                login()
                                            }
                                        }} />
                                    <span className="icon is-small is-left">
                                        <i className="bi bi-lock-fill" />
                                    </span>
                                    <span className="help">Ingresa contraseña</span>
                                </p>
                            </div>
                            <button className="button is-link"
                                style={{ width: '100%' }}
                                onClick={login}>Sign in</button>

                            <p className='has-text-centered'>
                                <a onClick={() => setPage('Registro')}>Registrar nuevo usuario</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
