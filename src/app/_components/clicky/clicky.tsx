import React from 'react';
import style from "./clicky.module.css";

import Link from "next/link";

interface KathyClickyProps {
    elem?: 'button' | 'link',
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
            <Link className={`${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''} ${(icon) ? style.icon : ''}`} href={link}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${style.clicky} ${(primary) ? style.primary : ''} ${(cloak) ? style[cloak] : ''} ${(colour) ? style[colour] : ''} ${(icon) ? style.icon : ''}`} onClick={link}>
            {children}
        </button>
    );
}