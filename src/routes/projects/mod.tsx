import { Card } from '../../components/card.tsx';
import { Project, ProjectList } from '../../components/project.tsx';
import { projects } from '../../lib/projects.ts';

export default function Home() {
	return (
		<>
			<Card>
				<h2>projects</h2>
				<ProjectList>
					{projects.map((project) => <Project project={project} />)}
				</ProjectList>
			</Card>
		</>
	);
}
