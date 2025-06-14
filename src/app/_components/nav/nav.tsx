"use client";

import React from 'react';
import style from "./nav.module.css";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { KathyClicky } from '../clicky/clicky';
import {IconApps, IconAppsFilled, IconBookFilled, IconDiscFilled, IconHeartFilled, IconHome} from "@tabler/icons-react";

export const KathyNav = () => {
    const route = usePathname();

    const normal = style.item;
    const active = `${style.item} ${style.active}`;

    return (
        <nav className={style.nav}>
            <KathyClicky
                elem="link"
                link="/"
                primary={route === '/'}
            >
                <IconHome size={20} />
                home
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/work"
                primary={route === '/work'}
            >
                <IconAppsFilled size={20} />
                work
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/sponsor"
                primary={route === '/sponsor'}
            >
                <IconHeartFilled size={20} />
                sponsor
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/mus"
                primary={route === '/mus'}
            >
                <IconDiscFilled size={20} />
                music
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/blog"
                primary={route === '/blog'}
            >
                <IconBookFilled size={20} />
                blog
            </KathyClicky>
        </nav>
    );
}
