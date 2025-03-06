"use client";

import React from 'react';
import style from "./nav.module.css";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { KathyClicky } from '../clicky/clicky';

import * as SolarIconSet from "solar-icon-set";

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
                <SolarIconSet.Home2 iconStyle={(route === '/') ? "BoldDuotone" : "Outline"} size={20} />
                home
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/work"
                primary={route === '/work'}
            >
                <SolarIconSet.FolderWithFiles iconStyle={(route === '/work') ? "BoldDuotone" : "Outline"} size={20} />
                work
            </KathyClicky>
            <KathyClicky
                elem="link"
                link="/mus"
                primary={route === '/mus'}
            >
                <SolarIconSet.TurntableMusicNote iconStyle={(route === '/mus') ? "BoldDuotone" : "Outline"} size={20} />
                music
            </KathyClicky>
        </nav>
    );
}