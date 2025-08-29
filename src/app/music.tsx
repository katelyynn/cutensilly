import {api} from '~/trpc/server';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';

export async function Mus() {
    const recent_tracks = await api.lastfm.getRecentTracks(
        {username: "clairedoll", limit: 1}
    );

    if (!recent_tracks) {
        return <div className="alert">no data available</div>;
    }

    return (
        <KathyTrackList>
            <KathyTrack
                avatar={recent_tracks.tracks[0].avatar}
                title={recent_tracks.tracks[0].title}
                artist={recent_tracks.tracks[0].artist}
                album={recent_tracks.tracks[0].album}
                time={recent_tracks.tracks[0].time}
                love={recent_tracks.tracks[0].love}
                active={recent_tracks.tracks[0].active}
                link={recent_tracks.tracks[0].link}
                mini
            />
        </KathyTrackList>
    );
}
