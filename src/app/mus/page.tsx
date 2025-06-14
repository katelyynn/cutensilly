import { api } from '~/trpc/server';

import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyTrackList, KathyTrack } from '~/app/_components/track/track';
import { KathyRecordList, KathyRecord } from '~/app/_components/record/record';

import type { Track } from '~/app/_components/track/track';
import type { Record } from '~/app/_components/record/record';

export default async function Home() {
  const recent_tracks = await api.lastfm.getRecentTracks({ username: "hyacines" });
  console.log(recent_tracks);

  const collection = await api.discogs.getMusicCollection({ username: "hyacine", page: 1 });
  console.log(collection);

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
        <div className="sep" />
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
            />
          ))}
        </KathyTrackList>
      </KathyCard>
    </main>
  );
}
