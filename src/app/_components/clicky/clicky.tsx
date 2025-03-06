import React from 'react';
import style from "./clicky.module.css";

import Link from "next/link";

interface KathyClickyProps {
    elem?: 'button' | 'link' | 'a',
    link?: any,
    primary?: boolean,
    cloak?: string, colour?: string,
    children: React.ReactNode,
    icon?: boolean
}

export const KathyClicky = ({
    elem,
    link,
    primary,
    cloak, colour,
    children,
    icon
}: KathyClickyProps) => {
    if (elem == 'link') {
        return (
            <Link className={`colourful ${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''} ${(icon) ? style.icon : ''}`} href={link}>
                {children}
            </Link>
        );
    }

    if (elem == 'a') {
        return (
            <a className={`colourful ${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''} ${(icon) ? style.icon : ''}`} href={link} target="_blank">
                {children}
            </a>
        );
    }

    return (
        <button className={`colourful ${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''} ${(icon) ? style.icon : ''}`} onClick={link}>
            {children}
        </button>
    );
}

interface KathyClickyListProps {
    children: React.ReactNode
}

export const KathyClickyList = ({
    children
}: KathyClickyListProps) => {
    return (
        <div className={style.list}>
            {children}
        </div>
    );
}

interface KathyClickyGridProps {
    children: React.ReactNode
}

export const KathyClickyGrid = ({
    children
}: KathyClickyGridProps) => {
    return (
        <div className={style.grid}>
            {children}
        </div>
    );
}