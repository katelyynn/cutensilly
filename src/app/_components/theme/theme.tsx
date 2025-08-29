'use client';

import { useEffect, useState } from 'react';
import { KathyClicky } from '../clicky/clicky';
import Link from 'next/link';

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');

        const isDark = stored == 'dark';
        setDark(isDark);
        document.body.classList.toggle('dark', isDark);
    }, []);

    function toggle() {
        const new_theme = !dark;

        setDark(new_theme);
        document.body.classList.toggle('dark', new_theme);
        localStorage.setItem('theme', new_theme ? 'dark' : 'light');
    }

    return (
        <>
            <Link href={'/'}>
                <img src={dark ? '/wordmark-d.png' : '/wordmark.png'} alt='katelyn!' />
            </Link>
            <KathyClicky cloak='theme' elem='button' link={toggle} colour={dark ? 'dark' : 'light'}>
                {dark ? 'switch to light' : 'switch to dark'}
            </KathyClicky>
        </>
    );
}