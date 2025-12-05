/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { CosplayProps } from "~/app/_components/marine/cosplay";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface MangaList {
    errors: null,
    data: {
        Page: {
            activities: CosplayProps[]
        }
    } | null
}

export const marineRouter = createTRPCRouter({
  getFeed: publicProcedure
    .input(z.void())
    .query(async (): Promise<MangaList> => {
        const query = `
            query Activities($userId: Int, $sort: [ActivitySort]) {
              Page {
                activities(userId: $userId, sort: $sort) {
                  ... on ListActivity {
                    siteUrl
                    status
                    progress
                    media {
                      coverImage {
                        large
                      }
                      title {
                        romaji
                      }
                      siteUrl
                      isAdult
                      type
                      chapters
                      episodes
                    }
                    id
                    createdAt
                  }
                }
              }
            }
        `;

        const variables = {
            userId: 7593546,
            sort: "ID_DESC"
        };

        const response = await fetch(
            'https://graphql.anilist.co',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    query,
                    variables
                }),
                next: {revalidate: 60 * 60}
            }
        );

        const data = await response.json();

        return data;
    }),
});
