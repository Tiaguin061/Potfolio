import { Container } from './styles'

import {Langs} from '../../components/Langs'
import {Footer} from '../../components/Footer'
import {About} from '../../components/About';
import {MediaSocial} from '../../components/MediaSocial';

export function Home() {
	return (
		<Container>
			<About />
			<Langs />
			<MediaSocial />
			<Footer />
		</Container>
	);
}