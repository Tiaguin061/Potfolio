import React from 'react';
import './styles'

// icons 
import  { AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Container, Content } from './styles';

const date = new Date();

const year = date.getFullYear();

const Footer: React.FC = () => {
	return (
		<Container>
			<Content>
				<div>
					<a href="https://instagram.com/tiaguinho_gon1" title="Acessar Instagram">
						<FiInstagram />
					</a>
					<a title="Acessar Linkedin" href="https://www.linkedin.com/in/tiagogoncalves200428/">
						<AiFillLinkedin />
					</a>
					<a title="Acessar Discord" href="https://discordapp.com/users/586186122611130368">
						<FaDiscord />
					</a>
				</div>
				<p>&copy; CopyRight {year} ❤️ <span>By Tiago Gonçalves</span></p>
			</Content>
		</Container>
	)
}

export default Footer;