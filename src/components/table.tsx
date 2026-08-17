import { css } from '@404/aether';

const tableStyles = css`
	:scope {
		border: 1px solid oklch(var(--b4));
		border-radius: var(--radius);
		margin-top: 10px;

		display: flex;
		flex-direction: column;
	}
`;
const tableEntryStyles = css`
	:scope {
		display: flex;
		font-size: 13px;

		&:not(:last-child) {
			border-bottom: 1px solid oklch(var(--b4));
		}
	}

	.key {
		border-right: 1px solid oklch(var(--b4));
		color: oklch(var(--c3));
		width: 110px;
	}

	.key,
	.value {
		padding: 6px 10px;
	}

	.value {
		flex: 1;
	}
`;

interface TableProps {
	children: unknown;
}

export function Table({
	children,
}: TableProps) {
	return (
		<tableStyles.div>
			{children}
		</tableStyles.div>
	);
}

interface TableEntryProps {
	k: string;
	children: unknown;
}

export function TableEntry({
	k,
	children,
}: TableEntryProps) {
	return (
		<tableEntryStyles.div>
			<div class='key'>
				{k}
			</div>
			<div class='value'>
				{children}
			</div>
		</tableEntryStyles.div>
	);
}
