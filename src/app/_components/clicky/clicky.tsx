import React from 'react';
import style from "./clicky.module.css";

import Link from "next/link";

interface KathyClickyProps {
    elem?: 'button' | 'link',
    link?: any,
    primary?: boolean,
    cloak?: string, colour?: string,
    children: React.ReactNode
}

export const KathyClicky = ({
    elem,
    link,
    primary,
    cloak, colour,
    children
}: KathyClickyProps) => {
    if (elem == 'link') {
        return (
            <Link className={`${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''}`} href={link}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''}`} onClick={link}>
            {children}
        </button>
    );
}