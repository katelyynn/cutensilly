import {api} from '~/trpc/server';
import { StatusBlock } from './status';

export async function StatusAPI() {
    const status = await api.status.getStatus(
        {username: "vivicat"}
    );

    if (!status) {
        return <div className="alert">no data available</div>;
    }

    return (
        <StatusBlock author={status.author} content={status.content} face={status.face} timeAgo={status.timeAgo} />
    );
}
