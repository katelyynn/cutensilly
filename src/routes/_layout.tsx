import { css, Head } from '@404/aether';
import { Content } from '../components/content.tsx';
import { Side } from '../components/side.tsx';
import { Nav, NavList } from '../components/nav.tsx';
import { Card } from '../components/card.tsx';
import { Table, TableEntry } from '../components/table.tsx';

export const styles = css`
	/* http://meyerweb.com/eric/tools/css/reset/
	v2.0 | 20110126
	License: none (public domain)
	*/

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	* {
		box-sizing: border-box;
	}

	html {
		--default-hue: 171;
		--default-sat: 0.71;
		--default-lit: 1.06;

		--hue: var(--hue-over, var(--hue-album, var(--hue-user, var(--hue-seasonal, var(--default-hue)))));
		--sat-raw: var(--sat-over, var(--sat-album, var(--sat-user, var(--sat-seasonal, var(--default-sat)))));
		--lit-raw: var(--lit-over, var(--lit-album, var(--lit-user, var(--lit-seasonal, var(--default-lit)))));

		--sat-multiply: 0.18;
		--lit-multiply: 1.25;

		--sat: calc(var(--sat-raw) * var(--sat-multiply));
		--lit: calc(var(--lit-raw) * var(--lit-multiply));

		--sat-bg: 1;

		--font: 'Bricolage Grotesque Variable', Inter, Roboto, system-ui, sans-serif;
		--font-size: 14px;
		--line-height: 18px;
		--font-weight: 400;
		--font-weight-md: 500;
		--font-weight-nm: 600;
		--font-weight-lg: 700;

		--b4: 0.99 calc(var(--sat) * 0.2 * var(--sat-bg, 1)) var(--hue);
		--b5: 0.96 calc(var(--sat) * 0.02 * var(--sat-bg, 1)) var(--hue);
		--b6: 0.91 calc(var(--sat) * 0.06 * var(--sat-bg, 1)) var(--hue);
		--b7: 0.87 calc(var(--sat) * 0.12 * var(--sat-bg, 1)) var(--hue);

		--c1: 0 calc(var(--sat) * 0.06) var(--hue);
		--c2: 0.3 calc(var(--sat) * 0.24) var(--hue);
		--c3: 0.58 calc(var(--sat) * 0.4) var(--hue);

		--l2-c: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.65) calc(clamp(min(0), var(--sat), max(2)) * 0.5) var(--hue);
		--l3-c: var(--l3-c-lit) var(--l3-c-sat) var(--hue);
		--l4-c: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.3) calc(clamp(min(0), var(--sat), max(2)) * 0.6) var(--hue);

		--l3-c-sat: calc(clamp(min(0), var(--sat), max(2)) * 0.5);
		--l3-c-lit: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.36);

		--h2: calc(clamp(min(0.7), var(--lit), max(1.1)) * 1.1) calc(clamp(min(0), var(--sat), max(2)) * 0.4) var(--hue);
		--h3: var(--h3-lit) var(--h3-sat) var(--hue);
		--h3-sat: calc(clamp(min(0), var(--sat), max(2)) * 0.42);
		--h3-lit: calc(clamp(min(0.85), var(--lit), max(1.1)) * 0.78);

		--h4: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.63) calc(clamp(min(0), var(--sat), max(2)) * 0.6) var(--hue);
		--f4: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.8) calc(clamp(min(0), var(--sat), max(2)) * 0.58) var(--hue);
		--k4: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.8) calc(clamp(min(0), var(--sat), max(2)) * 0.62) var(--hue);
		--g4: 0.92 calc(clamp(min(0), var(--sat), max(2)) * 0.7) var(--hue);

		--blur: blur(8px);

		&[data-theme="dark"] {
			--b4: 0.3 calc(var(--sat) * 0.15 * var(--sat-bg, 1)) var(--hue);
			--b5: 0.25 calc(var(--sat) * 0.13 * var(--sat-bg, 1)) var(--hue);
			--b6: 0.17 calc(var(--sat) * 0.1 * var(--sat-bg, 1)) var(--hue);
			--b7: 0.2 calc(var(--sat) * 0.12 * var(--sat-bg, 1)) var(--hue);

			--c1: 1 calc(var(--sat) * 0.06) var(--hue);
			--c2: 0.85 calc(var(--sat) * 0.3) var(--hue);
			--c3: 0.6 calc(var(--sat) * 0.3) var(--hue);

			--l2-c: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.93) calc(clamp(min(0), var(--sat), max(2)) * 0.5) var(--hue);
			--l3-c: var(--l3-c-lit) var(--l3-c-sat) var(--hue);
			--l4-c: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.65) calc(clamp(min(0), var(--sat), max(2)) * 0.7) var(--hue);

			--l3-c-sat: calc(clamp(min(0), var(--sat), max(2)) * 0.5);
			--l3-c-lit: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.73);

			--h3: var(--h3-lit) var(--h3-sat) var(--hue);
			--h3-sat: calc(clamp(min(0), var(--sat), max(2)) * 0.42);
			--h3-lit: calc(clamp(min(0.85), var(--lit), max(1.1)) * 0.78);

			--h4: calc(clamp(min(0.7), var(--lit), max(1.1)) * 0.53) calc(clamp(min(0), var(--sat), max(2)) * 0.5) var(--hue);
		}
	}

	@font-face {
		font-family: 'Bricolage Grotesque Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 200 800;
		font-stretch: 75% 100%;
		src: url(https://cdn.jsdelivr.net/fontsource/fonts/bricolage-grotesque:vf@5.3.0/latin-wdth-normal.woff2)
			format('woff2-variations');
		unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
	}

	@font-face {
		font-family: 'Bricolage Grotesque Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 200 800;
		font-stretch: 75% 100%;
		src: url(https://cdn.jsdelivr.net/fontsource/fonts/bricolage-grotesque:vf@5.3.0/latin-ext-wdth-normal.woff2)
			format('woff2-variations');
		unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
	}

	html,
	* {
		scrollbar-width: none;
		scrollbar-gutter: stable both-edges;
	}

	body {
		font-family: var(--font);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-weight: var(--font-weight);
		background: oklch(var(--b6));
		color: oklch(var(--c2));

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		padding: 100px 0;
		cursor: default;
	}

	main {
		display: flex;
	}

	strong {
		color: oklch(var(--l4-c));
		font-weight: var(--font-weight-md);
	}

	p {
		margin-top: 10px;

		&:first-child {
			margin-top: unset;
		}
	}

	h1 {
		background: linear-gradient(90deg, oklch(var(--l3-c)), oklch(var(--l3-c)),
			oklch(var(--l2-c)), oklch(var(--l3-c)), oklch(var(--l3-c)));
		font-size: 20px;
		line-height: 30px;
		font-weight: 900;
		background-size: 400% 100%;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: yuzu 16s linear infinite;

		text-decoration-color: oklch(var(--l3-c)/ 30%);
		text-decoration-style: dotted;
		text-decoration-line: underline;

		transition-property: text-decoration-color, -webkit-text-decoration-color;
		transition-duration: 0.4s;
		transition-timing-function: var(--trans-function);
	}

	@keyframes yuzu {
		0% {
			background-position: 0 0;
		}
		to {
			background-position: 400% 0;
		}
	}

	a {
		position: relative;
		color: oklch(var(--l3-c));
		text-decoration-line: underline;
		text-decoration-color: oklch(var(--l3-c)/20%);
		text-underline-offset: 3px;
		transition-property: text-decoration-color, color,
			-webkit-text-decoration-color;
		transition-duration: 0.4s;
		transition-timing-function: var(--trans-function);

		&:before {
			content: "";
			position: absolute;
			inset: -1px -3px;
			background: oklch(var(--h4) /20%);
			border-radius: 4px;
			transform-origin: bottom;
			transform: scaleY(0);
			transition-property: transform;
			transition-duration: .4s;
			transition-timing-function: var(--trans-function);
			pointer-events: none;
		}

		&:hover {
			color: oklch(var(--l4-c));
			text-decoration-color: oklch(var(--l3-c)/60%);
			transition: none;

			&:before {
				transform: scaleY(1);
			}
		}
	}

	h3 {
		margin-bottom: 6px;
		font-weight: var(--font-weight-md);
	}

	h4 {
		color: oklch(var(--c3));
		font-size: 13px;
		padding: 0 14px;
	}

	::selection {
		background: oklch(var(--h3) / 20%);
		color: oklch(var(--l2-c));
	}
`;

export default function Layout({
	children,
}: { children: unknown }) {
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
							<h1>yuzu.pet</h1>
							<p>welcome to my corner of the interwebs ~</p>
							<Table>
								<TableEntry k='prns'>it/she</TableEntry>
								<TableEntry k='height'>
									about 20cm max
								</TableEntry>
								<TableEntry k='time'>23:01</TableEntry>
							</Table>
						</Card>
						{children}
					</Content>
					<Side>
						<NavList />
					</Side>
				</main>
			</body>
		</styles.html>
	);
}
