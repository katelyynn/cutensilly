import {api} from '~/trpc/server';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';
import { RecentTracks } from '~/server/api/routers/lastfm';

export async function Mus() {
    const recent_tracks: RecentTracks = await api.lastfm.getRecentTracks(
        {username: "dressupdarling", limit: 5}
    );

    if (!recent_tracks || !recent_tracks.tracks || recent_tracks.tracks.length == 0) {
        return <div className="alert">no data available</div>;
    }

    return (
        <>
            <h3>listening history</h3>
            <KathyTrackList>
                {recent_tracks.tracks.map((track, i) => (
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
                        key={i}
                    />
                ))}
            </KathyTrackList>
        </>
    );
}
