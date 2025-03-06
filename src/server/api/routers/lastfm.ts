import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

import type { Track } from '~/app/_components/track/track';

export type RecentTracks = {
  tracks: Track[]
}

export const lastfmRouter = createTRPCRouter({
  getRecentTracks: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ input }): RecentTracks => {
      return {
        tracks: [
          {
            title: 'song name',
            artist: {
              title: 'artist name',
              link: ''
            },
            album: {
              title: 'album name',
              link: ''
            },
            link: '',
            active: true,
          },
          {
            title: 'song name',
            artist: {
              title: 'artist name',
              link: ''
            },
            album: {
              title: 'album name',
              link: ''
            },
            link: '',
          },
        ],
      };
    }),
});
