import React from 'react';
import style from "./record.module.css";

import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyLinkBlock } from '../link_block/link_block';

export interface Format {
    qty: string,
    descriptions: string[],
    name: string
}

interface Artist {
    id: number,
    name: string,
    join: string,
    resource_url: string,
    anv: string,
    tracks: string,
    role: string
}

export type RecordItem = {
    id: number,
    title: string,
    year: number,
    avatar: string,
    formats: Format[],
    artists: Artist[],
    cd: boolean
}

interface corrected {
    artists: Record<string, string>,
    names: Record<string, Record<string, string>>
}

export const KathyRecord = ({
    id,
    title,
    year,
    avatar,
    formats,
    artists,
    cd
}: RecordItem) => {
    const first_artist = artists[0]?.name || '';

    const corrected: corrected = {
        artists: {
            'Rosé (2)': 'ROSÉ',
            'Charli XCX': 'Charli xcx',
            'My Bloody Valentine': 'my bloody valentine',
            'Glaive (4)': 'glaive',
            'Brakence': 'brakence'
        },
        names: {
            'Rosé (2)': {
                'Rosie': 'rosie'
            },
            'My Bloody Valentine': {
                'Loveless': 'loveless'
            },
            'Charli XCX': {
                "Brat And It's Completely Different But Also Still Brat": "brat and it's completely different but also still brat",
                'Brat': 'brat',
                "Brat And It's Completely Different": "brat and it's completely different",
                "How I'm Feeling Now": "how i'm feeling now",
                'Crash': 'CRASH'
            },
            'Ariana Grande': {
                'Eternal Sunshine Deluxe: Brighter Days Ahead': 'eternal sunshine deluxe: brighter days ahead',
                'Thank U, Next': 'thank u, next'
            },
            'julie (103)': {
                'My Anti-Aircraft Friend': 'my anti-aircraft friend',
                'Pushing Daisies ': 'pushing daisies'
            },
            'Denzel Curry': {
                'Ta13oo': 'TA13OO'
            },
            'Sabrina Carpenter': {
                'Fruitcake': 'fruitcake',
                "Short N' Sweet (Deluxe)": "Short n' Sweet (Deluxe)",
                "Short N' Sweet": "Short n' Sweet",
                "Emails I Can't Send": "emails i can't send"
            },
            'Tyler, The Creator': {
                'Chromakopia': 'CHROMAKOPIA',
                'Call Me If You Get Lost': 'CALL ME IF YOU GET LOST',
                'Igor': 'IGOR'
            },
            '21 Savage': {
                'American Dream': 'american dream'
            },
            'Kanye West': {
                'Ye': 'ye'
            },
            'Taylor Swift': {
                'Folklore': 'folklore',
                'Evermore': 'evermore',
                'Reputation': 'reputation'
            },
            'Olivia Rodrigo': {
                'Guts': 'GUTS',
                'Sour': 'sour'
            },
            'Brakence': {
                'Hypochondriac': 'hypochondriac'
            },
            'Glaive (4)': {
                'Old Dog, New Tricks': 'old dog, new tricks'
            },
            'Travis Scott (2)': {
                'Utopia': 'UTOPIA',
                'Astroworld': 'ASTROWORLD'
            },
            'Playboi Carti': {
                'Music': 'MUSIC'
            },
            'Billie Eilish': {
                'Hit Me Hard And Soft': 'HIT ME HARD AND SOFT',
                'When We All Fall Asleep, Where Do We Go?': 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?'
            }
        }
    }

    function replace_artist(name: string) {
        if (corrected.artists[name]) return corrected.artists[name];

        return name;
    }

    function replace_name(name: string) {
        if (corrected.names[first_artist]?.[name]) return corrected.names[first_artist][name];

        return name;
    }

    return (
        <li className={style.record}>
            <div className={`${style.avatar} ${formats[0]?.name.toLowerCase().startsWith('cd') ? style.cd : ''}`}>
                <KathyAvatar image={avatar} alt={`image for ${title}`} size="lg" lazy />
            </div>
            <div className={style.info}>
                <div className={style.title}>{replace_name(title)}</div>
                <div className={style.artists}>
                    {artists.map((artist: Artist, i: number) => (
                        <span className={style.artist} key={i}>{replace_artist(artist.name).replace(/\s*\([^)]*\)\s*\d*$/, '')}{(artists.length > 1) ? <span className={style.join}>{(artist.join == '&') ? ' ' : ''}{artist.join} </span> : ''}</span>
                    ))}
                </div>
                <div className={style.extras}>
                    <div className={style.year}>{(year > 0) ? year : '-'}</div>
                    {(formats[0]?.descriptions[0]) ? <div className={style.descriptor}>{formats[0].descriptions[0]}</div> : ''}
                </div>
                {formats[0] ? <div className={style.format} key={0}>({formats[0].name})</div> : ''}
            </div>
            <KathyLinkBlock link={`https://www.discogs.com/release/${id}`} type="a" />
        </li>
    );
}

export const KathyRecordList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    )
}
