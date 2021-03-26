import React, {useState, useEffect} from 'react';

import { Container } from './styles'

// Components
import Header from '../../components/Header'
import Langs from '../../components/Langs'
import Footer from '../../components/Footer'
import About from '../../components/About';
import Tragetory from '../../components/Tragetory';
import MediaSocial from '../../components/MediaSocial';

const Home: React.FC =() => {
	return (
		<Container>
			<Header />
			<About />
			<Langs />
			<Tragetory />
			<MediaSocial />
			<Footer />
		</Container>
		)
	}
	
	export default Home;