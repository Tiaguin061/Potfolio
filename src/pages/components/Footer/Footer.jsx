import React from 'react';
import './footer.css'

// icons 
import  { AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const date = new Date();

const year = date.getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="itemsFooter">
                <div className="medias">
                    <a href="https://instagram.com/tiaguinho_gon1" title="Acessar Instagram">
                        <FiInstagram />
                    </a>
                    <a title="Acessar Linkedin" href="https://www.linkedin.com/in/tiagogoncalves200428/">
                        <AiFillLinkedin />
                    </a>
                    <a title="Acessar Discord" href="https://discordapp.com/users/586186122611130368">
                        <FaDiscord />
                    </a>
                </div>
                <p>&copy; CopyRight {year} ❤️ By Tiago Gonçalves</p>
            </div>
        </footer>
)
}