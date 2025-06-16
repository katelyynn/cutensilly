import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "bleh - katelyn.moe",
    description: "a complete overhaul for last.fm with in-built themes, capitalisation corrections, music title tagging decoders, colour customisation, a seasonal system, useful tweaks, and more",
    keywords: ['bleh', 'last.fm', 'katelyn', 'cutensilly', 'cutensilly.org', 'redesign', 'sleek', 'dark theme', 'last.fm dark theme', 'last.fm dark theme 2025', 'last.fm theme', 'last.fm stylus', 'last.fm tampermonkey', 'last.fm script', 'minimal', 'statistics', 'last.fm tools', 'last.fm collage generator'],
    openGraph: {
        title: 'bleh',
        images: [
            {
                url: 'https://katelyn.moe/bleh-ash.jpg',
                width: 900,
                height: 529
            }
        ]
    }
};

export default async function bleh() {
    return <main />;
}
