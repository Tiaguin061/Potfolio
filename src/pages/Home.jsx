import React from 'react';
import MyTragetory from '.././pages/components/MyTragetory/MyTragetory'
import '../styles/home.css'
import '../styles/global.css'
// Images
import image from '../images/semFoto.png'
import devGit from '../images/devGit.svg'
import contact from '../images/contact.svg'

import {DiHtml5, DiCss3, DiNodejsSmall, DiJavascript1, DiReact, DiPostgresql} from 'react-icons/di'
import {BsArrowReturnRight} from 'react-icons/bs'
import {AiOutlineMail, AiFillGithub} from 'react-icons/ai'
export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="apresentation">
                    <img src={image} alt="Tiago Gonçalves"/>
                    <div className="social-icons">
                        {/* <i><FiInstagram />?</i> */}
                    </div>
                </div>
                <div className="textsAbout">
                    <h1 className="colorEdit">Bem vindo ao meu Portfólio,</h1>
                    <p>Me chamo <span className="colorEdit"> Tiago Gonçalves </span>, tenho 16 anos e sou um jovem do Rio de Janeiro que gosta de aproveitar a vida, como jogar torcer para meu time de futebol, jogar video-game, sair com amigos e tudo mais.. mas não descarto que sou bem produtivo quando não estou apenas me divertindo.. passei ser um amante da programação, esse "mundo" da tecnologia é muito top.</p>
                </div>
            </div>
            <div className="tragetory">
                <MyTragetory />
                <div className="devGit">
                    <img src={devGit} alt="Boneco programando"/>
                    <h1>Já acessou meu 
                        <span className="colorEdit"> GitHub? </span> 
                    </h1>
                    <p>Se você nunca passou por lá, sugiro que veja, utilizo para postar meus projetos de estudo e próprios, confere lá, é bem interessante. Qualquer dica para melhoria, só entre em contato comigo!
                    </p>
                    <a href="https://github.com" target="_blank" className="socialIcons"><AiFillGithub className="icon"/> Meu GitHub</a>
                </div>
            </div>
            
            <div className="languagesProgramation">
                <div className="cardsDomination">
                    <h1 className="h1editLanguages">O que eu domino</h1>
                    <div className="cards">
                        <div className="card js">
                            <i> <DiJavascript1 /></i>
                            <h1>JavaScript</h1>
                        </div>
                        <div className="card node">
                            <i> <DiNodejsSmall /></i>
                            <h1>NodeJs</h1>
                        </div>
                        <div className="card html">
                            <i> <DiHtml5 /></i>
                            <h1>Html 5</h1>
                        </div>
                        <div className="card css">
                            <i> <DiCss3 /></i>
                            <h1>Css 3</h1>
                        </div>
                        <div className="card postgres">
                            <i> <DiPostgresql /></i>
                            <h1>PostgresSQL</h1>
                        </div>
                    </div>

                </div>
                <div className="cardsLearning">
                    <h1 className="h1editLanguages">O que estou aprendendo</h1>
                    <div className="cards">
                        <div className="card react">
                            <i> <DiReact /></i>
                            <h1>React Js</h1>
                        </div>
                        <div className="card rn">
                            <i> <DiReact /></i>
                            <h1>React Native</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}