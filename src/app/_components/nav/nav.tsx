"use client";

import React from 'react';
import style from "./nav.module.css";

import { usePathname } from 'next/navigation';
import { KathyClicky } from '../clicky/clicky';
import { Badge } from '../badge/badge';

export const KathyNav = () => {
    const route = usePathname();

    return (
        <nav className={`card side ${style.nav}`}>
            <h2>cute:</h2>
            <KathyClicky
                elem="link"
                link="/"
                primary={route == '/'}
                cloak="tab"
            >
                me!
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/work"
                primary={route == '/work'}
                cloak="tab"
            >
                projects
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/mus"
                primary={route == '/mus'}
                cloak="tab"
            >
                music
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/sponsor"
                primary={route == '/sponsor'}
                cloak="tab"
            >
                sponsor
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/crop"
                primary={route == '/crop'}
                cloak="tab"
            >
                crop
            </KathyClicky>
            <h2>social:</h2>
            <KathyClicky cloak="tab" colour="social" link="https://last.fm/user/clairedoll" elem="a">
                last.fm <i>@clairedoll</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="social" link="https://www.discogs.com/user/longsocks/collection" elem="a">
                discogs <i>@longsocks</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="social" link="https://github.com/katelyynn" elem="a">
                github <i>@katelyynn</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="social" link="https://www.albumoftheyear.org/user/clairedoll/" elem="a">
                aoty <i>@clairedoll</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="social" link="https://rateyourmusic.com/~kateshapedbox" elem="a">
                rym <i>@kateshapedbox</i>
            </KathyClicky>
            <h2>badges:</h2>
            <div className="badges">
                <Badge url="https://katelyn.moe/8831.png" src="/8831.png" alt="katelyn.moe - add my badge!!" />
                <Badge url="https://hazey.moe" src="https://hazey.moe/banner.png" alt="hazey my lovely wife" />
                <Badge url="https://acpi.at" src="https://acpi.at/88x31.gif" alt="muxiepuff" />
                <img src='/sm.jpg' alt='sm' />
                <img src='/darwin.gif' alt='darwin' />
                <img src='/apple.gif' alt='apple' />
            </div>
        </nav>
    );
}
