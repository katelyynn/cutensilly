import { css } from '@404/aether';

const Styled = css`
	:scope {
		background: oklch(var(--b5));
		border-radius: 8px;
		padding: 15px;
		box-shadow: inset 0 1px 0 0 oklch(var(--b4)), 0 10px 20px
			oklch(var(--b7));
		width: 400px;
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
