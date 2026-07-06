"use client";

import React from 'react';
import styles from "./nav.module.css";

import { usePathname } from 'next/navigation';
import { KathyClicky } from '../clicky/clicky';
import { Badge } from '../badge/badge';
import { IconBriefcaseFilled, IconClefStaff, IconCrop, IconHeart, IconHeartFilled, IconMeteorFilled, IconNotebook } from '@tabler/icons-react';

export const KathyNav = () => {
    const route = usePathname();

    const links = {
        lastfm: 'dressupdarling',
        discogs: 'longsocks',
        github: 'katelyynn',
        aoty: 'clairedoll',
        anilist: 'rizukyun',
        rym: 'kateshapedbox',
        modrinth: 'kate',
        rec: 'miku'
    }

    return (
        <>
            <div className={styles.side}>
                <nav className={styles.nav}>
                    <KathyClicky
                        elem="link"
                        link="/"
                        primary={route == '/'}
                        cloak="tab"
                    >
                        <IconMeteorFilled className={styles.icon} />
                        me!
                    </KathyClicky>
                    <KathyClicky
                        elem="link"
                        link="/work"
                        primary={route == '/work'}
                        cloak="tab"
                    >
                        <IconBriefcaseFilled className={styles.icon} />
                        projects
                    </KathyClicky>
                    <KathyClicky
                        elem="link"
                        link="/mus"
                        primary={route == '/mus'}
                        cloak="tab"
                    >
                        <IconClefStaff className={styles.icon} />
                        music
                    </KathyClicky>
                    <KathyClicky
                        elem="link"
                        link="/diary"
                        primary={route.startsWith('/diary')}
                        cloak="tab"
                    >
                        <IconNotebook className={styles.icon} />
                        diary
                    </KathyClicky>
                    <KathyClicky
                        elem="link"
                        link="/sponsor"
                        primary={route == '/sponsor'}
                        cloak="tab"
                    >
                        <IconHeartFilled className={styles.icon} />
                        sponsor
                    </KathyClicky>
                    <KathyClicky
                        elem="link"
                        link="/crop"
                        primary={route == '/crop'}
                        cloak="tab"
                    >
                        <IconCrop className={styles.icon} />
                        crop
                    </KathyClicky>
                </nav>
                <nav className={`${styles.nav}`}>
                    <h2>social:</h2>
                    <KathyClicky cloak="tab" colour="social" link={`https://last.fm/user/${links.lastfm}`} elem="a">
                        last.fm <i>@{links.lastfm}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://www.discogs.com/user/${links.discogs}/collection`} elem="a">
                        discogs <i>@{links.discogs}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://github.com/${links.github}`} elem="a">
                        github <i>@{links.github}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://modrinth.com/user/${links.modrinth}`} elem="a">
                        modrinth <i>@{links.modrinth}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://www.albumoftheyear.org/user/${links.aoty}`} elem="a">
                        aoty <i>@{links.aoty}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://record.club/${links.rec}`} elem="a">
                        record.club <i>@{links.rec}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://anilist.co/user/${links.anilist}`} elem="a">
                        anilist <i>@{links.anilist}</i>
                    </KathyClicky>
                    <KathyClicky cloak="tab" colour="social" link={`https://rateyourmusic.com/~${links.rym}`} elem="a">
                        rym <i>@{links.rym}</i>
                    </KathyClicky>
                </nav>
                <nav className={`${styles.nav}`}>
                    <h2>badges:</h2>
                    <div className="badges">
                        <Badge url="https://katelyn.moe/8831.png" src="/8831.png" alt="katelyn.moe - add my badge!!" />
                        <Badge url="https://hazey.moe" src="https://hazey.moe/banner.png" alt="hazey my lovely wife" />
                        <Badge url="https://kyu.re" iframe="https://kyu.re/button.min.html" alt="lívia!!" />
                        <Badge url="https://paige.moe" src="https://paige.moe/88x31.gif" alt="paige!!" />
                        <Badge url="https://nin0.dev" src="https://files.nin0.dev/88x31.png" alt="nina!!" />
                        <Badge src="/sm.jpg" alt="sm" />
                        <Badge src="/darwin.gif" alt="sm" />
                        <Badge src="/apple.gif" alt="sm" />
                    </div>
                    <div className={styles.extra}>
                        made with love by me, 2026
                    </div>
                </nav>
            </div>
        </>
    );
}

/*

<nav className={`card side ${styles.nav}`}>
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
            <KathyClicky cloak="tab" colour="social" link="https://anilist.co/user/rizukyun/" elem="a">
                anilist <i>@rizukyun</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="social" link="https://rateyourmusic.com/~kateshapedbox" elem="a">
                rym <i>@kateshapedbox</i>
            </KathyClicky>
            <h2>badges:</h2>
            <div className="badges">
                <Badge url="https://katelyn.moe/8831.png" src="/8831.png" alt="katelyn.moe - add my badge!!" />
                <Badge url="https://hazey.moe" src="https://hazey.moe/banner.png" alt="hazey my lovely wife" />
                <Badge url="https://kyu.re" iframe="https://kyu.re/button.min.html" alt="kyure" />
                <img src='/sm.jpg' alt='sm' />
                <img src='/darwin.gif' alt='darwin' />
                <img src='/apple.gif' alt='apple' />
            </div>
            <div className={styles.extra}>
                made with love by me, 2025
            </div>
        </nav> */
