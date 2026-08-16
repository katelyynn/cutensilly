import { css } from '@404/aether';

const StyledSide = css`
	:scope {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 210px;
	}
`;

export function NavList() {
	return (
		<StyledSide.nav>
			<Nav href='/' selected>
				me!
			</Nav>
			<Nav href='/projects'>
				projects
			</Nav>
			<Nav href='/music'>
				music
			</Nav>
			<Nav href='/diary'>
				diary
			</Nav>
			<Nav href='/sponsor'>
				sponsor
			</Nav>
		</StyledSide.nav>
	);
}

const StyledNav = css`
	:scope {
		background: oklch(var(--b5) / 30%);
		color: oklch(var(--c2));
		text-decoration: none;
		padding: 7px 14px;
		border-radius: 6px;
		font-weight: var(--font-weight);
		display: flex;
		transition-property: background, font-weight;
		transition-duration: 0.4s;
		transition-timing-function: var(--trans-function);
		width: 100%;

		&:hover {
			color: oklch(var(--c2));
			background: oklch(var(--b5) / 80%);
			transition: none;
		}

		&[aria-selected] {
			background: oklch(var(--b5));
			font-weight: var(--font-weight-md);
		}

		&:before {
			display: none;
		}
	}
`;

interface NavProps {
	href: string;
	selected?: boolean;
	children: unknown;
}

export function Nav({
	href,
	selected,
	children,
}: NavProps) {
	return (
		<StyledNav.a aria-selected={selected} href={href}>
			{children}
		</StyledNav.a>
	);
}
