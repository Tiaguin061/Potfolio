import { useEffect } from 'react';
import { domination } from '../../Json/langs';
import Aos from 'aos';

import "aos/dist/aos.css";

import { Container, Content, Section, Cards, Card } from './styles';

export function Langs() {
	useEffect(() => {
		Aos.init({duration: 1000});
	}, []);

	return (
	<Container>
		<Content>
			<Section>
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
			</Section>
		</Content>
	</Container>
	);
}
