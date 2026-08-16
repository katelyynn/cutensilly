import { css } from '@404/aether';

const Styled = css`
	:scope {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-left: 10px;
	}
`;

export function Side({
	children,
}: { children: unknown }) {
	return (
		<Styled.div>
			{children}
		</Styled.div>
	);
}
