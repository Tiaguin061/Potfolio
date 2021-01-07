import React from 'react';

import {Link} from 'react-router-dom';
import './header.css';

import {FiMenu} from 'react-icons/fi';
import {MdArrowForward} from 'react-icons/md';

export default function Header() {
    return (
        <header className="header">
            <div className="bgHeader">
                <div className="logo">
                    <Link to="/">
                        <h1>Tiago</h1>
                        <h2>Gonçalves</h2>
                    </Link>
                </div>
                <li
                    className="btnMenu btnMenu_open">
                    <FiMenu className="buttonMenu"/>
                </li>
                <ul id="menu" className="menu ">
                    <div className="navigation">
                        <div className="logoBtnMenu">
                            <div className="maxWd">
                                <div className="logo">
                                    <Link to="/">
                                        <h1>Tiago</h1>
                                        <h2>Gonçalves</h2>
                                    </Link>
                                </div>
                                <li className="btnMenu btnMenu_close"><FiMenu className="buttonMenu"/></li>
                            </div>
                        </div>
                        <li className="menu-item">
                            <a href="#projects"
                            className="menu-item-action">
                                <MdArrowForward/> Projetos
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#study"
                            className="menu-item-action">
                               <MdArrowForward/> Estudos
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#about" 
                            className="menu-item-action">
                               <MdArrowForward/> Sobre mim
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#contact"
                            className="menu-item-action">
                               <MdArrowForward/> Contato
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    )
}
