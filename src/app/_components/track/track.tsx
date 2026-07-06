import React from 'react';
import style from "./track.module.css";

import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyLinkBlock } from '../link_block/link_block';
import {KathySprite} from "~/app/_components/sprite/sprite";
import { IconHeartFilled } from '@tabler/icons-react';

import { album_track as lotus_album_track, artist as lotus_artist } from '@tealmiku/lotus';
import { DateTime } from 'luxon';

export type Track = {
    avatar?: string,
    title: string,
    artist: {
        title: string,
        link: string
    },
    album?: {
        title: string,
        link: string
    },
    time?: string,
    love?: boolean,
    active?: boolean,
    link: string,
    mini?: boolean
}

export const KathyTrack = ({
    avatar,
    title,
    artist,
    album,
    time,
    love,
    active,
    link,
    mini = false
}: Track) => {
    if (lotus_artist) {
        artist.title = correct_artist(artist.title, lotus_artist);
    }

    if (lotus_album_track) {
        title = correct_item_by_artist(title, artist.title, lotus_album_track);

        if (album) {
            album.title = correct_item_by_artist(album.title, artist.title, lotus_album_track);
        }
    }

    return (
        <li className={`${style.track} ${(active) ? style.active : ''} ${mini ? style.mini : ''}`}>
            <KathyAvatar image={avatar} alt={(album) ? `avatar for ${album.title}` : `avatar for ${title}`} size='nm' />
            <div className={style.info}>
                <div className={style.title}>{title}</div>
                {(artist) ? <div className={style.artist}><a href={`${artist.link}`}>{artist.title}</a></div> : null}
            </div>
            {(love) ? (
                <div className={style.heartbg}>
                    <IconHeartFilled className={style.heart} />
                </div>
            ) : ''}
            {(time && !active) ? <div className={style.time}>{DateTime.fromSeconds(Number(time)).toRelative()}</div> : ''}
            {(active) ? <div className={style.time}>Listening now</div> : ''}
            <KathyLinkBlock link={`${link}`} type="a" />
        </li>
    );
}

function correct_item_by_artist(item: string, artist: string, album_track_corrections = {}) {
    artist = artist.toLowerCase();

    try {
        if (album_track_corrections.hasOwnProperty(artist)) {
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
            if (album_track_corrections[artist].hasOwnProperty(item)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
                return album_track_corrections[artist][item];
            } else {
                return item;
            }
        } else {
            return item;
        }
    } catch (e) {
        return item;
    }
}

function correct_artist(artist: string, artist_corrections = {}) {
    try {
        if (artist_corrections.hasOwnProperty(artist)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return artist_corrections[artist];
        } else {
            return artist;
        }
    } catch (e) {
        return artist;
    }
}

export const KathyTrackList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    )
}
