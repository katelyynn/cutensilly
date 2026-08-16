import { css } from '@404/aether';

const Styled = css`
	:scope {
		display: flex;
		flex-direction: column;
		position: relative;
	}
`;

export function Content({
	children,
}: { children: unknown }) {
	return (
		<Styled.div>
			{children}
		</Styled.div>
	);
}
