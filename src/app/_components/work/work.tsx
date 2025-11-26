import React from 'react';
import style from "./work.module.css";

import Image from 'next/image';
import { KathyClicky, KathyClickyList } from '../clicky/clicky';
import {KathyLinkBlock} from "~/app/_components/link_block/link_block";

interface KathyWorkProps {
    image?: string,
    title: string,
    bio: string,
    view_url?: WorkLink,
    source_url?: WorkLink,
    years: string
}

interface WorkLink {
    link: string,
    external?: boolean
}

export const KathyWork = ({
    image,
    title,
    bio,
    view_url,
    source_url,
    years
}: KathyWorkProps) => {
    return (
        <li className={style.work}>
            {image ? <img className={style.image} src={image} alt={title} /> : <div className={style.image} />}
            <div className={style.info}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.years}>{years}</p>
                <p className={style.bio}>{bio}</p>
            </div>
            {view_url ?
            <KathyLinkBlock link={view_url.link} type={view_url.external ? 'a' : 'link'}/>
            : source_url ?
            <KathyLinkBlock link={source_url.link} type={source_url.external ? 'a' : 'link'}/>
            : ''
            }
        </li>
    );
}

export const KathyWorkList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    );
}
