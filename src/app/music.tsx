import {api} from '~/trpc/server';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';
import { RecentTracks } from '~/server/api/routers/lastfm';

export async function Mus() {
    const recent_tracks: RecentTracks = await api.lastfm.getRecentTracks(
        {username: "dressupdarling", limit: 1}
    );

    if (!recent_tracks || !recent_tracks.tracks || recent_tracks.tracks.length == 0) {
        return <div className="alert">no data available</div>;
    }

    const track = recent_tracks.tracks[0]!;

    return (
        <>
            {track.active ? (
                <h3 className="status online"><img src={'/online.png'} width="8" height="8" />actively listening toooo:</h3>
            ) : (
                <h3 className="status offline"><img src={'/offline.png'} width="8" height="8" />my last song was..</h3>
            )}
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
