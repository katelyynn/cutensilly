import type {Metadata} from "next";
import {KathyCard} from '~/app/_components/card/card';
import {KathyPerk, KathyPerkList} from "~/app/_components/perk/perk";
import {KathyClicky} from "~/app/_components/clicky/clicky";

export const metadata: Metadata = {
    title: "bwaa - katelyn.moe",
    description: "return last.fm to its former 2012 design with modern features kept intact",
    keywords: ['bwaa', 'last.fm', 'lastfm', 'redesign', 'lastfm old theme', 'lastfm 2012 theme', 'lastfm 2014 theme', 'old last.fm', 'revert last.fm', 'revert redesign', 'revert'],
    openGraph: {
        title: 'bwaa',
        images: [
            {
                url: 'https://katelyn.moe/bwaa-image.png',
                width: 1920,
                height: 1080
            }
        ]
    }
};

export default async function bwaa() {
    return (
        <>
            <KathyCard full>
                <img className="picture-frame" alt="bwaa" src="/bwaa-image.png" />
                <h1>bwaa</h1>
                <h2>return last.fm to 2012</h2>
                <KathyClicky cloak="big" link="https://github.com/katelyynn/bwaa/raw/uwu/fm/bwaa.user.js" elem="a">
                    install now
                </KathyClicky>
                <div className="alert">
                    if you are using chrome-based browsers (including opera, brave, whatever) you <a href="https://www.tampermonkey.net/faq.php?locale=en#Q209" target="_blank">must enable developer mode</a>
                </div>
                <div className="sep"/>
                <KathyPerkList>
                    <KathyPerk>
                        <div className="perk-icon">
                            <div className="famfamfam-silk hourglass" />
                        </div>
                        <h5>designs restored</h5>
                        <p>the classic page layout based on each era restored faithfully, with modern features being customisable</p>
                    </KathyPerk>
                    <KathyPerk>
                        <div className="perk-icon">
                            <div className="famfamfam-silk cog" />
                        </div>
                        <h5>configurable</h5>
                        <p>choose the era of last.fm you prefer and any additional settings</p>
                    </KathyPerk>
                    <KathyPerk>
                        <div className="perk-icon">
                            <div className="famfamfam-silk contrast" />
                        </div>
                        <h5>theme support</h5>
                        <p>'Paint It Black', a full dark theme, is available for late nights</p>
                    </KathyPerk>
                </KathyPerkList>
            </KathyCard>
        </>
    );
}
