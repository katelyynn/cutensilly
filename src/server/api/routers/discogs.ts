/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import type { Record } from '~/app/_components/record/record';
import { env } from 'process';

export type MusicCollection = {
  pages: {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: any;
  }
  collection: Record[]
}

export const discogsRouter = createTRPCRouter({
  getMusicCollection: publicProcedure
    .input(z.object({ username: z.string(), page: z.number() }))
    .query(async ({ input }): Promise<MusicCollection> => {
      const response = await fetch(`https://api.discogs.com/users/${input.username}/collection/folders/0/releases?token=${env.DISCOGS_API_KEY}&per_page=100&sort=added&sort_order=desc&page=${input.page}`);

      const data = await response.json();

      let collection = [];

      data.releases.forEach((item) => {
        const info = item.basic_information;

        collection.push({
          id: item.id,
          title: info.title,
          year: info.year,
          avatar: info.cover_image,
          formats: info.formats,
          artists: info.artists
        });
      });

      return {
        pages: data.pagination,
        collection: collection,
      };
    }),
});
