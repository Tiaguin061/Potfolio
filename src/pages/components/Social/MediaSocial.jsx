import React from 'react'
import MediaMap from './MediaMap'

import './mediaSocial.css'

// icons
import { GiLobArrow} from 'react-icons/gi'
import  {AiFillGithub} from 'react-icons/ai'

import devGit from '../../../images/devGit.svg'

export default function MediaSocial() {
    return (
        <div className="media">
            <div className="social-media">
                <div className="devGit">
                    <img src={devGit} alt="Boneco programando"/>
                    <div className="gitText">
                        <h1>Já acessou meu 
                            <span className="colorEdit"> GitHub? </span> 
                        </h1>
                        <p>Se você nunca passou por lá, sugiro que veja, utilizo para postar meus projetos de estudo e próprios, confere lá, é bem interessante. Qualquer dica para melhoria, entre em contato comigo!
                        </p>
                        <a href="https://github.com/Tiaguin061" target="_blank" className="socialIcons"><AiFillGithub className="icon"/>Clique aqui</a>
                    </div>
                </div>
                <div className="textInCard">
                    <div className="maxDiv">
                        <h1 className="h1edit">Entre em contato comigo <GiLobArrow className="icon"/></h1>

                        <p>Venha interagir comigo, estou sempre a disposição para o que vier, abaixo você poderá <span className="colorEdit">clicar em qualquer ícone</span> que será levado ao meu contato. 
                        <br/>O meu <span className="colorEdit">Gmail</span> você pode copiar.
                        </p>
                        <div className="cards">
                            <MediaMap />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}