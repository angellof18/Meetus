import React, { useState } from "react";
import { Chat } from "./Chat";
import io from "socket.io-client";
import "./css/Join.css";

const socket = io.connect();

export const Join = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const join = (e) => {
        e.preventDefault()
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
                                <div className="column is-half" style={{ paddingRight: '5%' }}>
                                    <p className="title">Comienza a chatear</p>
                                    <hr />
                                    <form onSubmit={join}>
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input type="text" className="input" required autoFocus
                                                    onChange={e => setUsername(e.target.value)} />
                                                <p className="help">Usuario</p>
                                                <span className="icon is-small">
                                                    <i className="bi bi-people-fill" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input type="text" className="input" required
                                                    onChange={e => setRoom(e.target.value)} />
                                                <p className="help">Unirse a una sala</p>
                                                <span className="icon is-small">
                                                    <i className="bi bi-chat-right-quote-fill" />
                                                </span>
                                            </div>
                                        </div>
                                        <button className="button is-link"
                                            style={{ width: '100%' }}
                                            type="submit">Join</button>

                                    </form>

                                </div>
                                <div className="column">
                                    <img src="./join2.jpg" alt="join_img" className="animate__animated animate__zoomIn animate__faster" />
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
