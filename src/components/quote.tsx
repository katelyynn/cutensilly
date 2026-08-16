import { css } from '@404/aether';

const styles = css`
	:scope {
		border: 1px solid oklch(var(--h4) / 20%);
		padding: 10px;
		border-radius: inherit;
		margin-top: 15px;
	}

	cite {
		color: oklch(var(--l3-c));
		width: 100%;
		display: block;
		font-size: 13px;
		margin-top: 6px;
	}
`;

interface QuoteProps {
	children: unknown;
	cite: string;
}

export function Quote({
	children,
	cite,
}: QuoteProps) {
	return (
		<styles.div>
			<blockquote>{children}</blockquote>
			<cite>~ {cite}</cite>
		</styles.div>
	);
}
