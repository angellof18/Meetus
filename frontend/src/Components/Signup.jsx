import React, { useState } from "react";
import Axios from "axios";
import SHA256 from "crypto-js/sha256";
import './css/Signup.css'

export const Signup = ({setPage}) => {
    const [nombre, setNombre] = useState("");
    const [ap_paterno, setAp_paterno] = useState("");
    const [ap_materno, setAp_materno] = useState("");
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const clearInputs = () => {
        setNombre("");
        setAp_paterno("");
        setAp_materno("");
        setUsuario("");
        setPass("");
        setPass2("");
    };

    const addUser = () => {
        if (nombre !== '' || ap_paterno !== '' || ap_materno !== '' || usuario !== '' || pass !== '' || pass2 !== '') {
            if (pass === pass2) {
                Axios.post('/sign', {
                    nombre: nombre.toUpperCase(),
                    ap_paterno: ap_paterno.toUpperCase(),
                    ap_materno: ap_materno.toUpperCase(),
                    usuario: usuario.toUpperCase(),
                    pass: SHA256(pass).toString()
                }).then((response) => {
                    alert(response.data)
                    clearInputs()
                })
            } else {
                alert("Las contraseñas no coinciden");
            }
        } else {
            alert('Llene todos los campos')
        }

    };


    return (
        <div className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third">

                            <p className="subtitle is-size-1 has-text-centered">
                                MEETUS
                            </p>
                            <hr />
                            <p className="has-text-centered">REGISTRATE</p>

                            <div className="field">
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        id="nombres"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <span className="help">Nombre(s)</span>
                                </div>
                            </div>

                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                id="ap_pa"
                                                value={ap_paterno}
                                                onChange={(e) => setAp_paterno(e.target.value)}
                                            />
                                            <span className="help">Apellido paterno</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                id="ap_ma"
                                                value={ap_materno}
                                                onChange={(e) => setAp_materno(e.target.value)}
                                            />
                                            <span className="help">Apellido materno</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        id="user"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="bi bi-people-fill" />
                                    </span>
                                    <span className="help">Usuario</span>
                                </div>
                            </div>

                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field ">
                                        <div className="control has-icons-left">
                                            <input
                                                type="password"
                                                className="input"
                                                id="pass"
                                                value={pass}
                                                onChange={(e) => setPass(e.target.value)}
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="bi bi-lock-fill" />
                                            </span>
                                            <span className="help">Contraseña</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <div className="control has-icons-left">
                                            <input
                                                type="password"
                                                className="input"
                                                id="pass2"
                                                value={pass2}
                                                onChange={(e) => setPass2(e.target.value)}
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="bi bi-lock-fill" />
                                            </span>
                                            <span className="help">Verifica contraseña</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="button is-link btn-Sign"
                                type="button"
                                onClick={addUser}
                                style={{ width: '100%' }}
                            >
                                Registrar
                            </button>
                            <p className="has-text-centered">
                                Ya tienes una cuenta? ... 
                                <a onClick={() => setPage('Login')}> Iniciar sesion</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
