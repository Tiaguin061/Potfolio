import React from 'react'
// import {} from 'react-icons/fa'
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="bgHeader">
                <div className="logo">
                    <h1>Tiago</h1>
                    <h2>Gonçalves</h2>
                </div>
                <div className="navigation">
                    <a href="/">Projetos</a>
                    <a href="/">Sobre mim</a>
                    <a href="/">Contato</a>
                </div>
            </div>
        </header>
    )
}