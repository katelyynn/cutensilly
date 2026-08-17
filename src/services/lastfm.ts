import { withInterval } from '../utils/interval.ts';

const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

export const lastfm = {
	api_key: Deno.env.get('LASTFM_API_KEY') || '',
	user: Deno.env.get('LASTFM_USER') || '',
};

export interface Parameters {
	api_key: string;
	method: string;
	[key: string]: string | number;
}

export interface Image {
	'#text': string;
	size: 'small' | 'medium' | 'large' | 'extralarge';
}

export interface Track {
	'@attr'?: {
		nowplaying?: 'true';
	};
	url: string;
	artist: {
		name: string;
	};
	album: {
		'#text': string;
	};
	image?: Image[];
	name: string;
	date?: {
		'#text': string;
		uts: string;
	};
	loved?: '0' | '1';
}

export interface RecentTracksResponse {
	recenttracks: {
		track: Track[];
		'@attr': {
			user: string;
			totalPages: number;
			page: number;
		};
	};
	error?: number;
	message?: string;
}

export async function fm(params: Parameters, secret?: string) {
	const url = new URL(BASE_URL);
	const parameters: Record<string, string> = { ...params, format: 'json' };

	Object.entries(parameters)
		.forEach(([key, value]) => url.searchParams.append(key, String(value)));

	const response = await fetch(url, {
		method: secret ? 'POST' : 'GET',
		headers: {
			'User-Agent': 'something/1.0',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	if (!response.ok) {
		throw new Error(`dies ${response.status}`);
	}

	const data = await response.json();

	if (data.error) {
		const error = new Error(data.message || 'unknown last.fm api error');
		throw (error as unknown as Record<string, string>).code = data.error,
			error;
	}
	return data;
}

export async function getRecentTracks(
	username: string,
	page: number,
	limit = 200,
	extended: number = 1,
): Promise<RecentTracksResponse> {
	return await fm({
		method: 'user.getRecentTracks',
		user: username,
		api_key: lastfm.api_key,
		limit,
		page,
		extended,
	});
}

export const tracks = await withInterval(async () => {
	const { recenttracks } = await getRecentTracks(lastfm.user, 1, 5);

	return recenttracks.track?.map((track) =>
		({
			artist: track.artist.name,
			album: track.album['#text'],
			title: track.name,
			loved: track.loved === '1' ? true : false,
			playing: track['@attr']?.nowplaying || false,
			cover: track.image?.at(-1)?.['#text'],
			url: track.url || '#',
		}) as Partial<Song> & { loved: boolean; playing: boolean }
	);
}, 60);
