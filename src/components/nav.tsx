import { css, requireContext } from '@404/aether';
import { Icon } from './icon.tsx';
import {
	AlbumIcon,
	ArrowRightUpIcon,
	BowknotIcon,
	Briefcase2Icon,
	DiaryIcon,
	HeartIcon,
} from '@mingcute/icons/core-regular';

const StyledSide = css`
	:scope {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 230px;
	}
`;

export function NavList() {
	const ctx = requireContext();

	return (
		<>
			<StyledSide.nav>
				<Nav href='/' selected={ctx.url.pathname == '/'}>
					<Icon icon={BowknotIcon} />
					me!
				</Nav>
				<Nav
					href='/projects'
					selected={ctx.url.pathname.startsWith('/projects')}
				>
					<Icon icon={Briefcase2Icon} />
					projects
				</Nav>
				<Nav
					href='/music'
					selected={ctx.url.pathname.startsWith('/music')}
				>
					<Icon icon={AlbumIcon} />
					music
				</Nav>
				<Nav
					href='/diary'
					selected={ctx.url.pathname.startsWith('/diary')}
				>
					<Icon icon={DiaryIcon} />
					diary
				</Nav>
				<Nav
					href='/sponsor'
					selected={ctx.url.pathname.startsWith('/sponsor')}
				>
					<Icon icon={HeartIcon} />
					sponsor
				</Nav>
			</StyledSide.nav>
			<StyledSide.nav>
				<h4>social:</h4>
				<SocialNav
					href='https://last.fm/user/dressupdarling'
					user='dressupdarling'
				>
					last.fm
				</SocialNav>
				<SocialNav
					href='https://www.discogs.com/user/longsocks/collection'
					user='longsocks'
				>
					discogs
				</SocialNav>
				<SocialNav
					href='https://github.com/katelyynn'
					user='katelyynn'
				>
					github
				</SocialNav>
				<SocialNav
					href='https://record.club/miku'
					user='miku'
				>
					record.club
				</SocialNav>
				<SocialNav
					href='https://www.albumoftheyear.org/user/clairedoll'
					user='clairedoll'
				>
					aoty
				</SocialNav>
				<SocialNav
					href='https://modrinth.com/user/kate'
					user='kate'
				>
					modrinth
				</SocialNav>
				<SocialNav
					href='https://anilist.co/user/rizukyun'
					user='rizukyun'
				>
					anilist
				</SocialNav>
			</StyledSide.nav>
		</>
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
		align-items: center;
		gap: 4px;
		--icon-size: 16px;
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

	.user {
		color: oklch(var(--c3));
		font-size: 13px;
		flex: 1;
		display: flex;
		justify-content: end;
	}

	.external {
		color: oklch(var(--c3));
		--icon-size: 14px;
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

interface SocialNavProps {
	href: string;
	user: string;
	selected?: boolean;
	children: unknown;
}

export function SocialNav({
	href,
	user,
	selected,
	children,
}: SocialNavProps) {
	return (
		<StyledNav.a aria-selected={selected} href={href}>
			{children}
			<i class='user'>@{user}</i>
			<Icon className='external' icon={ArrowRightUpIcon} />
		</StyledNav.a>
	);
}
