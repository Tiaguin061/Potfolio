import { Container, Content } from './styles';

const date = new Date();

const year = date.getFullYear();

export function Footer() {
	return (
		<Container>
			<Content>
				<div>
					<p>&copy; CopyRight {year} ❤️</p> <span>By Tiago Gonçalves</span>
				</div>
			</Content>
		</Container>
	);
}