import React from 'react';

import treeHome from '../../images/svgs/treeHome.svg';

import { Container, Content, Profile } from './styles';

import tiagoProfile from '../../images/png/tiagoProfile.png';

import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { MdComputer } from 'react-icons/md';

const About : React.FC = () => {
  return (
    <Container>
      <img src={treeHome} alt=""/>
      <Content>
        <Profile>
          <img src={tiagoProfile} alt=""/>
          <aside>
            <a href="https://www.linkedin.com/in/tiagogoncalves200428" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/tiaguinho_gon1" target="_blank">
              <FiInstagram />
            </a>
            <a href="https://github.com/Tiaguin061" target="_blank">
              <FiGithub />
            </a>
          </aside>
          <div>
            <span><TiLocation /> Rio de Janeiro, Brasil</span>
            <span><MdComputer /> Desenvolvedor FullStack</span>
          </div>
        </Profile>
        <section>
          <div>
            <h1>Olá, me chamo <span>Tiago Gonçalves,</span></h1>
            <p>E aqui está você no portfólio de um jovem apaixonado por desenvolvimento... então seja muito <span>bem-vindo</span> ao meu "mundo" haha. 
              <br /> 
              Aqui falarei sobre minha tragetória, as tecnologias que sou apaixonado e tudo mais.
              <br />
              <span>Vem comigooo nessa viagem? 🚀</span> 
            </p>
          </div>
        </section>
      </Content>
    </Container>
  )
}

export default About;