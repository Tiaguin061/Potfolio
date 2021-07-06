import { useEffect } from 'react';
import  {AiFillGithub} from 'react-icons/ai';
import Aos from 'aos';

import devGit from '../../images/svgs/devGit.svg';

import { Container, Content, Github } from './styles';

export function MediaSocial() {
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
            <p data-aos="fade-up">Se você nunca passou por lá, sugiro que veja, utilizo para postar meus projetos de estudo e próprios, confere lá, é bem interessante.
            </p>
            <a data-aos="fade-up" href="https://github.com/Tiaguin061" target="_blank"><AiFillGithub/>Clique aqui</a>
          </div>
        </Github>
      </Content>
    </Container>
  );
}
