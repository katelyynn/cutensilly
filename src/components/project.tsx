import { css } from '@404/aether';
import { project } from '../lib/projects.ts';

const listStyles = css`
	:scope {
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
		gap: 10px;
		width: 100%;
	}
`;

interface ProjectListProps {
	children: unknown;
}

export function ProjectList({
	children,
}: ProjectListProps) {
	return (
		<listStyles.div>
			{children}
		</listStyles.div>
	);
}

const styles = css`
	:scope {
		position: relative;
		display: flex;
		flex-direction: column;

		&:hover {
			.image {
				transform: translateY(-1px) scale(1.02);
			}

			.title {
				color: oklch(var(--l4-c));
				text-decoration-color: oklch(var(--l3-c)/60%);
				transition: none;

				&:before {
					transform: scaleY(1);
				}
			}
		}
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;

		background: oklch(var(--b6) / 50%);
		border-radius: 6px;
		color: oklch(var(--c3) / 60%);
		font-size: 22px;

		aspect-ratio: 4 / 3;
		transform: translateY(0) scale(1);
		transition-property: transform;
		transition-duration: 0.6s;
		transition-timing-function: var(--trans-function);
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6px;
		text-align: center;
	}

	.title {
		position: relative;
		color: oklch(var(--l3-c));
		text-decoration-line: underline;
		text-decoration-color: oklch(var(--l3-c) / 20%);
		text-underline-offset: 3px;
		transition-property: text-decoration-color, color,
			-webkit-text-decoration-color;
		transition-duration: 0.4s;
		transition-timing-function: var(--trans-function);

		&:before {
			content: "";
			position: absolute;
			inset: -1px -3px;
			background: oklch(var(--h4) / 20%);
			border-radius: 4px;
			transform-origin: bottom;
			transform: scaleY(0);
			transition-property: transform;
			transition-duration: 0.4s;
			transition-timing-function: var(--trans-function);
			pointer-events: none;
		}
	}

	.years {
		font-size: 13px;
		margin-top: 3px;
		color: oklch(var(--c3));
	}

	.about {
		font-size: 13px;
		margin-top: 0;
		width: 150px;
		color: oklch(var(--c2) / 80%);
	}

	.link-block {
		position: absolute;
		inset: 0;
		z-index: 3;
	}
`;

interface ProjectProps {
	project: project;
}

export function Project({
	project,
}: ProjectProps) {
	return (
		<styles.li>
			{project.image
				? <img class='image' src={project.image} />
				: (
					<div class='image'>
						{project.name}
					</div>
				)}
			<div class='info'>
				<h5>{project.name}</h5>
				<p class='years'>
					{project.end_year
						? `${project.start_year}—${project.end_year}`
						: project.start_year}
				</p>
				<p class='about'>
					{project.about}
				</p>
				{project.href && <a class='link-block' href={project.href} />}
			</div>
		</styles.li>
	);
}
