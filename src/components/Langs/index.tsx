import React, { useEffect } from 'react'
import { domination, learning } from '../../Json/langs';
import Aos from 'aos';

import "aos/dist/aos.css";

import { Container, Content, Cards, Card } from './styles'

const Langs: React.FC = () => {
	useEffect(() => {
		Aos.init({duration: 1000})
	}, []);

	return (
	<Container>
		<Content>
			<section>
				<h1 data-aos="fade-down">O que eu <span> domino? </span> </h1>
				<p data-aos="fade-down">Com o tempo eu venho me aprimorando e abaixo podemos ver as tecnologias que eu ja tenho experiência.</p>
				<Cards data-aos="fade-right">
					{
						domination.map((value) => (
							<Card 
								key={value.id}
								style={{borderBottom: `${value.borderBottom}`}}
							>

								<i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
								<h1>{value.name}</h1>
							</Card>
						))
					}
				</Cards>
			</section>
			<section>
				<h1 data-aos="fade-down"> O que estou <span> aprendendo? </span> </h1>
				<p data-aos="fade-down">Aqui vemos as tecnologias que estou aprendendo ou me aprimorando, mesmo já dominando.</p>
				<Cards data-aos="fade-left">
					{
						learning.map((value) => (
							<Card 
								key={value.id}
								style={{borderBottom: `${value.borderBottom}`}}
							>

								<i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
								<h1>{value.name}</h1>
							</Card>
						))
					}
				</Cards>
			</section>
		</Content>
	</Container>
	)
}

export default Langs