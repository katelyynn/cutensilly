export interface project {
	image?: string;
	name: string;
	start_year: number;
	end_year?: number;
	about: string;
	href?: string;
}

export const projects: project[] = [
	{
		image: 'https://bleh.yuzu.pet/appearance.webp',
		name: 'bleh',
		start_year: 2022,
		end_year: 2026,
		about: 'an entire (cute) redesign for the music site last.fm',
		href: 'https://bleh.yuzu.pet',
	},
	{
		name: 'bwaa',
		start_year: 2024,
		end_year: 2025,
		about:
			'brings last.fm back to 2012 while retaining all modern features',
		href: '~bwaa',
	},
	{
		name: 'lotus',
		start_year: 2024,
		end_year: 2026,
		about: 'name correction system for my last.fm projects, bleh and bwaa',
		href: '~lotus',
	},
	{
		name: 'oracle',
		start_year: 2025,
		end_year: 2026,
		about: 'helper to link last.fm pages to musicbrainz ids for bleh',
		href: '~oracle',
	},
	{
		name: 'florence',
		start_year: 2026,
		about: 'the framework powering bleh (and soon bwaa)',
		href: '~florence',
	},
];
