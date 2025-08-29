'use client';

import {api} from '~/trpc/react';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';

export function MusClient() {
    const {data: recent_tracks, isLoading: tracksLoading} = api.lastfm.getRecentTracks.useQuery(
        {username: "clairedoll", limit: 1},
        {
            staleTime: 30 * 1000, // Data becomes stale after 30 seconds
            gcTime: 5 * 60 * 1000, // Cache persists for 5 minutes
            refetchOnWindowFocus: false
        }
    );

    const {data: lotusAlbumTrack, isLoading: lotusAlbumTrackLoading} = api.lotus.getAlbumTracks.useQuery(
        void 0,
        {
            staleTime: 60 * 60 * 1000, // Data becomes stale after 1 hour
            gcTime: 24 * 60 * 60 * 1000, // Cache persists for 24 hours
            refetchOnWindowFocus: false
        }
    );

    const {data: lotusArtist, isLoading: lotusArtistLoading} = api.lotus.getArtists.useQuery(
        void 0,
        {
            staleTime: 60 * 60 * 1000, // Data becomes stale after 1 hour
            gcTime: 24 * 60 * 60 * 1000, // Cache persists for 24 hours
            refetchOnWindowFocus: false
        }
    );

    if (tracksLoading || lotusAlbumTrackLoading || lotusArtistLoading) {
        return <div className="alert">loading...</div>;
    }

    if (!recent_tracks || !lotusAlbumTrack || !lotusArtist) {
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
                lotus_album_track={lotusAlbumTrack}
                lotus_artist={lotusArtist}
                mini
            />
        </KathyTrackList>
    );
}
