import {api} from '~/trpc/server';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';
import { RecentTracks } from '~/server/api/routers/lastfm';

export async function Mus() {
    const recent_tracks: RecentTracks = await api.lastfm.getRecentTracks(
        {username: "clairedoll", limit: 1}
    );

    if (!recent_tracks || !recent_tracks.tracks || recent_tracks.tracks.length == 0) {
        return <div className="alert">no data available</div>;
    }

    const track = recent_tracks.tracks[0]!;

    return (
        <>
            <h3>{track.active ? "i'm currently listening to" : "i was listening to"}</h3>
            <KathyTrackList>
                <KathyTrack
                    avatar={track.avatar}
                    title={track.title}
                    artist={track.artist}
                    album={track.album}
                    time={track.time}
                    love={track.love}
                    active={track.active}
                    link={track.link}
                    mini
                />
            </KathyTrackList>
        </>
    );
}
