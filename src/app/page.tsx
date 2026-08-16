import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';

import {Mus} from "~/app/music";
import { StatusAPI } from './_components/status/status_api';
import { Suspense } from 'react';

export default async function Home() {
    return (
        <KathyCardList>
            <KathyCard>
                <p>i am a <b>self-taught programmer</b> mainly focusing on web dev at the moment, though im exploring other avenues.</p>
                <p>you may know me from <a href='https://bleh.katelyn.moe' target='_blank'>bleh, my last.fm extension</a>, and similar things like that ^^</p>
                <p>i try my best and thats the most you should expect from people i thinks.. everyone should be kind</p>
                <KathyQuote who={{
                    avatar: '/avatars/stella.png',
                    name: 'hazel, my lifelong angel (sis) ♡',
                    link: 'https://katelyn.moe'
                }}>
                    kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
                </KathyQuote>
            </KathyCard>
            <KathyCard classname="music">
                <Suspense>
                    <Mus />
                </Suspense>
                <div className="sep" />
                <Suspense>
                    <StatusAPI />
                </Suspense>
            </KathyCard>
        </KathyCardList>
    );
}
