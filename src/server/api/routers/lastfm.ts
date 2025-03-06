/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

import type { Track } from '~/app/_components/track/track';
import { env } from 'process';

export type RecentTracks = {
  tracks: Track[]
}

export const lastfmRouter = createTRPCRouter({
  getRecentTracks: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }): Promise<RecentTracks> => {
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&extended=1&api_key=${env.LASTFM_API_KEY}&username=${input.username}&limit=15`);

      //console.log(await response.json());

      const data = await response.json();

      let tracks = [];

      data.recenttracks.track.forEach((track) => {
        tracks.push({
          avatar: track.image[2]["#text"],
          title: track.name,
          artist: {
              title: track.artist.name,
              link: track.artist.url
          },
          album: {
              title: track.album?.["#text"],
              link: track.album?.["#text"]
          },
          time: track.date?.["#text"],
          love: (track.loved == "1"),
          active: track["@attr"]?.nowplaying,
          link: track.url
        });
      });

      return {
        tracks: tracks,
      };
    }),
});
