import React, { useEffect, useState } from 'react'
import './css/Chat.css'

export const Chat = ({ socket, username, room }) => {

    const [currentMessage, setCurrentMessage] = useState("")
    const [messagesList, setMessagesList] = useState([])

    const send = async () => {
        if (username && room) {
            const info = {
                author: username,
                room: room,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", info)
            setMessagesList((list) => [...list, info])
            setCurrentMessage("")
        }
    }

    useEffect(() => {
        const msg = (data) => {
            setMessagesList((list) => [...list, data])
        }

        socket.on("receive_message", msg)
        return () => socket.off("receive_message", msg)
    }, [socket])

    return (
        <div className="hero is-fullheight" style={{ width: '100%' }}>
            <header className="hero-head" style={{
                position: 'fixed',
                top: 100,
                width: '100%'
            }}>
                <div className="card-header-title" >
                    <div className="level">
                        <div className="level-left">
                            <p className='level-item'><strong>{`Chat | Sala ${room}`}</strong></p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="hero-body has-text-centered">
                <div className="container">
                    {messagesList.map((item, i) => {
                        return (
                            <span key={i}>
                                <article style={{
                                    textAlign: username === item.author ? 'right' : 'left',
                                    overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word',
                                    width: '100%'
                                }}
                                    className={`message ${username === item.author ? 'is-success' : 'is-info'}`}>
                                    <div class="message-body">
                                        <p className='is-size-4 is-size-6-mobile'>{item.message}</p>
                                        <p className="is-size-7">Enviado por <strong><p>{item.author}</p></strong> a las <i>{item.time}</i></p>
                                    </div>
                                </article>
                                <hr />
                            </span>
                        )
                    })
                    }
                </div>

            </section>
            <footer className="hero-foot" style={{
                position: 'fixed',
                bottom: 10,
                width:'100%'
            }}>
                <div className="container container-footer">
                    <input type="text" className="input" value={currentMessage}
                        onChange={e => setCurrentMessage(e.target.value)}
                        onKeyUp={e => {
                            if (e.key === "Enter") {
                                send()
                            }
                        }} />
                    <button className="button is-info"
                        onClick={send}>Enviar</button>
                </div>
            </footer>


        </div>
    )
}
