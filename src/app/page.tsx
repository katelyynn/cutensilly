import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';

import {Mus} from "~/app/music";
import { StatusAPI } from './_components/status/status_api';

export default async function Home() {
    return (
        <KathyCardList>
            <KathyCard>
                <p>i am a <b>self-taught programmer</b> mainly focusing on web dev for the meantime. you may know me from my popular <a href='https://bleh.katelyn.moe' target='_blank'>last.fm extension bleh</a> and similar things like that ^^</p>
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
                <Mus />
                <div className="sep" />
                <StatusAPI />
            </KathyCard>
        </KathyCardList>
    );
}
