import { css } from '@404/aether';

const Styled = css`
	:scope {
		width: 600px;
	}
`;

export function Card({
	children,
}: { children: unknown }) {
	return (
		<Styled.section>
			{children}
		</Styled.section>
	);
}
