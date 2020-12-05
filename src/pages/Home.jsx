import React, {useState, useEffect} from 'react';
import api from '.././services/api'
// libs
import Typical from 'react-typical'
import { useParams} from 'react-router-dom'

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
    const [state, setState] = useState({
        repositorys: [],
        // user: {},
    });

    const { id } = useParams();

    useEffect(() => {
        loadRepository();
        // loadInformationsMyUser();
    }, [id]);

    async function loadRepository() {
        const response = await api.get('https://api.github.com/users/Tiaguin061/repos');
        const repositorys = response.data;
        setState({repositorys})
    }
    const {repositorys } = state;
    // async function loadInformationsMyUser() {
    //     const response = await api.get('https://api.github.com/users/Tiaguin061');
    //     const user = response.data;
    //     setState({user});
    // }

    // const {user} = state;
    const [value, setValue] = useState(0);

    const onChange = value => {
    setValue(value);
    }
  
    if(!state) {
        return (
        <div className="loading">
            <Typical
                steps={[
                        'Carregando...', 3000,
                        '...', 2000 
                    ]} 
                loop={Infinity}
                wrapper="p" 
                className="machineEfect devMessage colorEdit"   
            />
        </div>
        )
    }
    return (
        <div className="home">
            <Header />
            <section className="about" id="about">
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
            <section className="languages" id="study">
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
            <section className="myRepositorys" id="projects">
                <div className="styleRepository">
                    <h1>Projetos / Em processo de criação \</h1>
                    <p>Está feio e responsivo feio.</p>
                    <div className="repositorys cards">
                        {repositorys.map((value, index) => (
                            <div key={index} className="repository card">
                                <h1>{value.name}</h1>
                                <p>{value.description}</p>
                                <a href={value.html_url}>Ver no github</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="myFooter">
                <Footer />
            </section>
        </div>
    )
}