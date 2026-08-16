import { css } from '@404/aether';

const styles = css`
	:scope {
		position: absolute;
		inset: 0;
		pointer-events: none;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logos {
		display: flex;
		flex-direction: column;
	}

	.logo {
		--size: 180px;
		/*color: transparent;
		-webkit-text-stroke: 2px oklch(var(--b5));*/
		color: oklch(var(--b5) / 5%);
		font-style: italic;

		font-size: var(--size);
		line-height: calc(var(--size) * 0.8);
		letter-spacing: 0.1px;
	}
`;

export function Logo() {
	const logos = new Array(20).fill('yuzu.pet');

	return (
		<styles.div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
			<div class='logos'>
				{logos.map((logo) => <div class='logo'>{logo}</div>)}
			</div>
		</styles.div>
	);
}
