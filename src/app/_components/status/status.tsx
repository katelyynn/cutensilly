import React from 'react';
import style from "./status.module.css";
import { Status } from '~/server/api/routers/status';

export const StatusBlock = ({
    author,
    content,
    face,
    timeAgo
}: Status) => {
    return (
        <>
            <h3 className="status cafe"><img src={'/home.png'} width="8" height="8" />status</h3>
            <div className={style.status}>
                <span className={style.emoji}>{face}</span>
                <span className={style.content}>{content}</span>
                <span className={style.time}>{timeAgo}</span>
            </div>
        </>
    );
}
