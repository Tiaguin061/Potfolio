import React from 'react';
 
// libs
import Typical from 'react-typical'
 
import '../styles/home.css'

// Images
import image from '../images/semFoto.png'

// Components
import Header from './components/Header/Header'
import Langs from './components/Languages/Languages'
import Tragetory from './components/MyTragetory/Tragetory'
import MediaSocial from './components/Social/MediaSocial'
import Footer from './components/Footer/Footer'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <section className="about">
                <div className="myAbout">
                    <div className="apresentation">
                        <img src={image} alt="Tiago Gonçalves"/>
                    </div>
                    
                    <div className="textsAbout" >
                        <h1 className="colorEdit machineEfect">Olá, me chamo Tiago Gonçalves,</h1>
                        <p>Sou um jovem de 16 anos do Rio de Janeiro que gosta de aproveitar a vida, como jogar torcer para meu time de futebol, jogar video-game, sair com amigos e tudo mais.. mas não descarto que sou bem produtivo quando não estou apenas me divertindo.. passei ser um amante da programação, esse "mundo" da <span className="colorEdit">tecnologia</span> é muito top.</p>
                    </div>
                </div>
            </section>
            <Typical
                steps={[
                        'Eu sou Desenvolvedor FullStack', 8000, 
                        'O que é programação para mim?', 8000, 
                        'Programação para mim é algo Perfeito!', 5000
                    ]} 
                loop={Infinity}
                wrapper="h1" 
                className="machineEfect devMessage colorEdit"   
            />
            <section className="languages">
                <Langs />
            </section>

            <section className="SectionMytragetory" id="tragetory">
                <Tragetory />
            </section>
            <section className="social-icons" id="contact">
                <MediaSocial />
            </section>
            <section className="projects">
                <div className="myProjects">
                </div>
            </section>
            <section className="myFooter">
                <Footer />
            </section>
        </div>

    )
}