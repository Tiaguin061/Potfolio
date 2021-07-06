import { FiGithub, FiInstagram } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/all';
import { FaLinkedin } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { MdComputer } from 'react-icons/md';

import waves from '../../images/svgs/waves.svg';
import tiagoProfile from '../../images/png/tiagoProfile.png';

import { Container, Content, Profile } from './styles';

export function About() {
  return (
    <Container>
      <img src={waves} alt=""/>
      <Content>
        <Profile>
          <img src={tiagoProfile} alt=""/>
          <aside>
            <a href="https://www.linkedin.com/in/tiagogoncalves200428" target="_blank" title="Linkedin">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/tiaguinho_gon1" target="_blank" title="Instagram">
              <FiInstagram />
            </a>
            <a href="https://github.com/Tiaguin061" target="_blank" title="Github">
              <FiGithub />
            </a>
            <a href="https://discord.com/users/586186122611130368" target="_blank" title="Discord">
              <SiDiscord />
            </a>
          </aside>
          <div>
            <span><TiLocation /> Rio de Janeiro, Brasil</span>
            <span><MdComputer /> Desenvolvedor FullStack</span>
          </div>
        </Profile>
        <section>
          <div>
            <h1>Olá, me chamo <span>Tiago Gonçalves</span></h1>
            <p>Aqui está você em um simples portfólio de um jovem apaixonado por desenvolvimento... então seja muito <span>bem-vindo</span> ao meu "mundo" haha. <br/>
            Atualmente sou desenvolvedor freelancer <span>fullstack web</span> buscando o melhor para mim mesmo !
            </p>
          </div>
        </section>
      </Content>
    </Container>
  );
}