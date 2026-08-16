import { IconDefinition, renderIconSource } from '@mingcute/icons';
import { css } from '@404/aether';

const styles = css`
	:scope {
		width: var(--icon-size, 18px);
		height: var(--icon-size, 18px);
		display: flex;

		& > svg {
			width: 100%;
			height: 100%;
		}
	}
`;

interface IconProps {
	icon: IconDefinition;
	className?: string;
}

export function Icon({
	icon,
	className,
}: IconProps) {
	const svg = renderIconSource(icon);
	return (
		<styles.span
			class={className}
			dangerouslySetInnerHTML={{ __html: svg }}
		/>
	);
}
