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
    .input(z.object({ username: z.string(), limit: z.number().optional() }))
    .query(async ({ input }): Promise<RecentTracks> => {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&extended=1&api_key=${env.LASTFM_API_KEY}&username=${input.username}&limit=${input.limit ?? 15}`,
        {
          next: {revalidate: 30}
        }
      );

      //console.log(await response.json());

      const data = await response.json();

      const tracks: Track[] = [];

      data.recenttracks.track.forEach((track: {
          image: [object, object, { "#text": string }],
          name: string,
          artist: {
              name: string,
              url: string
          },
          album: {
              "#text": string
          },
          date: {
              uts: string,
              "#text": string
          },
          loved: string,
          "@attr": {
              nowplaying: boolean
          },
          url: string
      }) => {
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
          time: track.date?.uts,
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
