// cli


let projects = {
    'laser-tag': {
        bio: 'a <i>WIP</i> massive crossbow-based minecraft shooter game which aims to contain a variety of minigames, maps, and advanced configuration.',
        links: [
            {
                type: 'sauce',
                link: 'https://github.com/katelyynn/laser-tag'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'skyplex': {
        bio: 'a <i>WIP</i> vanilla RPG-esc, vaguely hypixel skyblock-inspired experience in minecraft - featuring professions, leveling, xp boosters, quests, shops, and more planned.',
        links: [
            {
                type: 'sauce',
                link: 'https://github.com/katelyynn/skyplex'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'bleh': {
        bio: 'a complete visual overhaul for last.fm, incomplete but good enough at this stage. check out the site for more information and tweaks.',
        links: [
            {
                type: 'site',
                link: '/bleh/fm'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/bleh'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'clover': {
        bio: 'all-in-one datapack/mod for pronouns & name colours in chat.',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/clover'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/clover'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'viola': {
        bio: 'my very own dark-themed, purple-accented ui pack for minecraft.',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/resourcepack/viola'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/viola'
            }
        ],
        copyright: '2021-2024 (c) kate GPL-3.0'
    },
    'entity-count': {
        bio: 'count all entities currently loaded throughout your world.',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/entitycount'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/entity-count'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'achievement-race': {
        bio: 'each achievement gives a set amount of points, based on a range of factors. to start, 6 achievements are 2x multiplied for game variety. the player with the most points after 45 mins is the winner!',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/achievementrace'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/achievement-race'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'infection': {
        bio: 'gather resources for 8 mins before one player is infected - with the goal to kill and infect all remaining survivors. if any survivors remain once the timer reaches zero, the infected have failed.',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/infection'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/infection'
            }
        ],
        copyright: '2021-2024 (c) kate GPL-3.0'
    },
    'lava-rising': {
        bio: 'get time to prepare before the lava begins to engulf the world from the very bottom to the very top, who will win?',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/lavarising'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/lavarising'
            }
        ],
        copyright: '2021-2024 (c) kate GPL-3.0'
    },
    'snow-rising': {
        bio: 'a fun, and very chilly, spin-off of Lava Rising. powder snow will engulf the world from the very bottom to the very top, who will win?',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/snowrising'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/snowrising'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'vip': {
        bio: 'protect the VIP - you probably know of it under a different name. each team is assigned a VIP, who must be kept alive for the team to win. last team remaining wins.',
        links: [
            {
                type: 'modrinth',
                link: 'https://modrinth.com/datapack/vip'
            },
            {
                type: 'sauce2',
                link: 'https://github.com/katelyynn/vip'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'bridge': {
        bio: 'a heavy <i>WIP</i> take on the classic bridge duels trope seen throughout minecraft, aiming for full customisation and in-built maps.',
        links: [],
        copyright: '2022-2024 (c) kate GPL-3.0'
    }
};


function view_project(id) {
    document.getElementById('project-side').classList.remove('hidden');

    document.getElementById('project-title').textContent = id;
    document.getElementById('project-bio').innerHTML = projects[id].bio;

    document.getElementById('project-copyright').textContent = projects[id].copyright;
    //try { document.getElementById('project-copyright').setAttribute('href',projects[id].links[0].link); } catch(e) {}

    document.getElementById('project-image').setAttribute('src',`../img/project/${id}.png`);

    document.getElementById('project-links').innerHTML = '';
    for (let link in projects[id].links) {
        let this_link = projects[id].links[link];

        let elem = document.createElement('a');
        elem.classList.add('btn');
        elem.setAttribute('href',this_link.link);

        if (this_link.type == 'sauce') {
            elem.textContent = 'view sauce';
            elem.classList.add('primary');
        } else if (this_link.type == 'sauce2') {
            elem.textContent = 'view sauce';
        } else if (this_link.type == 'site') {
            elem.textContent = 'view site';
            elem.classList.add('primary');
        } else if (this_link.type == 'modrinth') {
            elem.textContent = 'view on modrinth';
            elem.classList.add('primary','brand','modrinth');
        }

        document.getElementById('project-links').appendChild(elem);
    }
}