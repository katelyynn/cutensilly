"use client";

import React from 'react';
import style from "./nav.module.css";

import { usePathname } from 'next/navigation';
import { KathyClicky } from '../clicky/clicky';

export const KathyNav = () => {
    const route = usePathname();

    return (
        <nav className={`card side ${style.nav}`}>
            <h2>on site:</h2>
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
            <h2>off site:</h2>
            <KathyClicky cloak="tab" colour="lastdotfm" link="https://last.fm/user/clairedoll" elem="a">
                last.fm : <i>clairedoll</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="discogs" link="https://www.discogs.com/user/longsocks/collection" elem="a">
                discogs : <i>longsocks</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="github" link="https://github.com/katelyynn" elem="a">
                github : <i>katelyynn</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="aoty" link="https://www.albumoftheyear.org/user/clairedoll/" elem="a">
                aoty : <i>clairedoll</i>
            </KathyClicky>
            <KathyClicky cloak="tab" colour="rym" link="https://rateyourmusic.com/~kateshapedbox" elem="a">
                rym : <i>kateshapedbox</i>
            </KathyClicky>
        </nav>
    );
}
