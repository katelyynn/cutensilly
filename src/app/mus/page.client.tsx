'use client';

import {api} from '~/trpc/react';
import {KathyCard} from '~/app/_components/card/card';
import {KathyTrackList, KathyTrack} from '~/app/_components/track/track';
import {KathyRecordList, KathyRecord} from '~/app/_components/record/record';

import type {Track} from '~/app/_components/track/track';
import type {Record} from '~/app/_components/record/record';

export function MusClient() {
    const {data: recent_tracks, isLoading: tracksLoading} = api.lastfm.getRecentTracks.useQuery(
        {username: "hyacines"},
        {
            staleTime: 30 * 1000, // Data becomes stale after 30 seconds
            gcTime: 5 * 60 * 1000, // Cache persists for 5 minutes
            refetchOnWindowFocus: false
        }
    );

    const {data: collection, isLoading: collectionLoading} = api.discogs.getMusicCollection.useQuery(
        {username: "hyacine", page: 1},
        {
            staleTime: 60 * 60 * 1000, // Data becomes stale after 1 hour
            gcTime: 24 * 60 * 60 * 1000, // Cache persists for 24 hours
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

    if (tracksLoading || collectionLoading || lotusAlbumTrackLoading || lotusArtistLoading) {
        return <main>
            <KathyCard full>
                <div className="alert">loading...</div>
            </KathyCard>
        </main>;
    }

    if (!recent_tracks || !collection || !lotusAlbumTrack || !lotusArtist) {
        return <main>
            <KathyCard full>
                <div className="alert">no data available</div>
            </KathyCard>
        </main>;
    }

    return (
        <main>
            <KathyCard full>
                <h1>physical collection</h1>
                <KathyRecordList>
                    {collection.collection.map((record: Record, i: number) => (
                        <KathyRecord
                            key={i}
                            id={record.id}
                            title={record.title}
                            year={record.year}
                            avatar={record.avatar}
                            formats={record.formats}
                            artists={record.artists}
                        />
                    ))}
                </KathyRecordList>
                <div className="sep"/>
                <h1>recent listening</h1>
                <KathyTrackList>
                    {recent_tracks.tracks.map((track: Track, i: number) => (
                        <KathyTrack
                            key={i}
                            avatar={track.avatar}
                            title={track.title}
                            artist={track.artist}
                            album={track.album}
                            time={track.time}
                            love={track.love}
                            active={track.active}
                            link={track.link}
                            lotus_album_track={lotusAlbumTrack}
                            lotus_artist={lotusArtist}
                        />
                    ))}
                </KathyTrackList>
            </KathyCard>
        </main>
    );
}
