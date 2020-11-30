import React from 'react'

import {Link} from 'react-router-dom'
import './header.css'


export default function Header() {
    return (
        <header className="header">
            <div className="bgHeader" id="responsiveId">
                <div className="logo">
                    <Link to="/">
                        <h1>Tiago</h1>
                        <h2>Gonçalves</h2>
                    </Link>
                </div>
                {/* <div className="navigation">
                    <a href="#projects">Projetos</a>
                    <a href="#tragetory">Sobre mim</a>
                    <a href="#contact">Contato</a>
                </div> */}
            </div>
        </header>
    )
}