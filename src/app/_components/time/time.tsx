'use client';

import { useEffect, useState } from 'react';

import styles from "./time.module.css";

export default function Timer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        function updateTime() {
            const now = new Date();

            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Europe/London',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }

            const string = new Intl.DateTimeFormat('en-GB', options).format(now);
            setTime(string);
        }

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.time}>{time}</div>
    )
}
