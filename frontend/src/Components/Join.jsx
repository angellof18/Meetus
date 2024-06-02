import React, { useState } from "react";
import { Chat } from "./Chat";
import io from "socket.io-client";
import "./css/Join.css";

const socket = io.connect();

export const Join = ({ setPage, usuario }) => {
    const [username, setUsername] = useState(usuario);
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const join = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <div>
            {!showChat ? (
                <div className="hero is-halfheight">
                    <section className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered is-centered">
                                <div className="column is-half" style={{paddingRight:'5%'}}>
                                    <p className="title">Comienza a chatear</p>
                                    <hr />
                                    <div className="columns">
                                        <div className="column is-four-fifths">
                                            <div className="field">
                                                <div className="control has-icons-left">
                                                    <input type="text" className="input"
                                                        onChange={e => setRoom(e.target.value)} />
                                                    <p className="help">Unirse a una sala</p>
                                                    <span className="icon is-small">
                                                        <i className="bi bi-people-fill" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column has-text-centered">
                                            <button className="button is-link"
                                                style={{ width: '100%' }}
                                                onClick={join}>Join</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="column">
                                    <img src="./join2.jpg" alt="join_img" className="animate__animated animate__zoomIn animate__faster"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <section className="section">
                    <Chat socket={socket} username={username} room={room} />
                </section>
            )}
        </div>
    );
};
