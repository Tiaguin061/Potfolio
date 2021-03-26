import React, { useEffect } from 'react'

import { Container, Content, Github, SocialIcons, Cards, Card } from './styles';
import './styles'

import { GiLobArrow} from 'react-icons/gi'
import  {AiFillGithub} from 'react-icons/ai'

import devGit from '../../images/svgs/devGit.svg'

import { mediaSocial } from '../../Json/mediaSocial';
import Aos from 'aos';

const MediaSocial: React.FC = () => {
  useEffect(() => {
		Aos.init({duration: 1000});
	}, []);

  return (
    <Container>
      <Content>
        <Github>
          <img data-aos="fade-right" src={devGit} alt="Boneco programando"/>
          <div>
            <h1 data-aos="fade-down">Já acessou meu 
              <span> GitHub? </span> 
            </h1>
            <p data-aos="fade-up">Se você nunca passou por lá, sugiro que veja, utilizo para postar meus projetos de estudo e próprios, confere lá, é bem interessante. Qualquer dica para melhoria, entre em contato comigo!
            </p>
            <a data-aos="fade-up" href="https://github.com/Tiaguin061" target="_blank"><AiFillGithub/>Clique aqui</a>
          </div>
        </Github>
        <SocialIcons>
          <div>
            <h1 data-aos="fade-right">Entre em contato comigo <GiLobArrow /></h1>

            <p data-aos="fade-right">Venha interagir comigo, estou sempre a disposição para o que vier, abaixo você poderá <span >clicar em qualquer ícone</span> que será levado ao meu contato. 
            </p>
            <Cards data-aos="fade-up">
              {
                mediaSocial.map(value => (
                  <Card
                    href={value.href}
                    target="_blank"
                    key={value.id}
                    style={{borderBottom: `${value.borderBottom}`}}
                  >
                    <i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
                    <h1>{value.name}</h1>
                  </Card>
                ))
              }
            </Cards>
          </div>
        </SocialIcons>
      </Content>
    </Container>
  )
}

export default MediaSocial;