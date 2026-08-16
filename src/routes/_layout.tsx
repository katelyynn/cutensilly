import { css } from '@404/aether';

import '@fontsource-variable/bricolage-grotesque/standard.css';

const Styled = css`
	body {
		padding: unset;
		background: #000;
		color: #fff;
	}
`;

export default function Layout({
	children,
}: { children: unknown }) {
	return (
		<Styled.html>
			<head>
				<title>yuzu.pet</title>
			</head>
			<body>
				<p>asasas</p>
				{children}
			</body>
		</Styled.html>
	);
}
