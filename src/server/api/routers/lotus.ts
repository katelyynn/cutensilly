/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const lotusRouter = createTRPCRouter({
  getAlbumTracks: publicProcedure
    .input(z.void())
    .query(async (): Promise<any> => {
      const response = await fetch('https://katelyynn.github.io/lotus/album_track.json');

      const data = await response.json();

      return {
        data: data,
      };
    }),
    getArtists: publicProcedure
        .input(z.void())
        .query(async (): Promise<any> => {
            const response = await fetch('https://katelyynn.github.io/lotus/artist.json');

            const data = await response.json();

            return {
                data: data,
            };
        }),
});
