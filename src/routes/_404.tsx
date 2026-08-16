import { Head } from '@404/aether';
import { styles } from './_layout.tsx';
import { Content } from '../components/content.tsx';
import { Side } from '../components/side.tsx';
import { NavList } from '../components/nav.tsx';
import { Card } from '../components/card.tsx';

export default () => {
	return (
		<styles.html data-theme='dark'>
			<Head>
				<meta charset='utf-8' />
				<title>yuzu.pet</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<body>
				<main>
					<Content>
						<Card>
							<h1>404</h1>
						</Card>
					</Content>
					<Side>
						<NavList />
					</Side>
				</main>
			</body>
		</styles.html>
	);
};
