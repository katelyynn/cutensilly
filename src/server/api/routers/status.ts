/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Status = {
    author: string,
    content: string,
    face: string,
    timeAgo: string
}

export const statusRouter = createTRPCRouter({
    getStatus: publicProcedure
        .input(z.object({ username: z.string() }))
        .query(async ({ input }): Promise<Status> => {
            const response = await fetch(
                `https://status.cafe/users/${input.username}/status.json`,
                {
                    cache: 'force-cache',
                    next: {
                        revalidate: 5 * 60
                    }
                }
            );

            const data = await response.json();

            return data;
        }),
});
