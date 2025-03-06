import { api } from '~/trpc/server';

import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyTrackList, KathyTrack } from '../_components/track/track';

import type { Track } from '../_components/track/track';

export default async function Home() {
  const recent_tracks = await api.lastfm.getRecentTracks({ username: "cutensilly" });

  console.log(recent_tracks);

  return (
    <main>
      <h3>music <span className="kyuu">collection</span></h3>
      <KathyCardList>
        <KathyCard>
          <h4>physical collection</h4>
        </KathyCard>
        <KathyCard>
          <h4>recent listening</h4>
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
      </KathyCardList>
    </main>
  );
}
