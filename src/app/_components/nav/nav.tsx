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
                cloak="tab"
            >
                me!
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/work"
                primary={route === '/work'}
                cloak="tab"
            >
                library
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/mus"
                primary={route === '/mus'}
                cloak="tab"
            >
                music
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/sponsor"
                primary={route === '/sponsor'}
                cloak="tab"
            >
                sponsor
            </KathyClicky>
        </nav>
    );
}
