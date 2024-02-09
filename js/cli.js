// cli


let projects = {
    'laser-tag': {
        bio: 'a WIP(!) massive crossbow-based Minecraft shooter game which aims to contain a variety of minigames, maps, and advanced configuration.',
        links: [
            {
                type: 'sauce',
                link: 'https://github.com/katelyynn/laser-tag'
            }
        ],
        copyright: '2022-2024 (c) kate GPL-3.0'
    },
    'skyplex': {
        bio: 'a WIP(!) vanilla RPG-esc, vaguely Hypixel Skyblock-inspired experience in Minecraft - featuring professions, leveling, xp boosters, quests, shops, and more planned.',
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
    }
};


function view_project(id) {
    document.getElementById('project-side').classList.remove('hidden');

    document.getElementById('project-title').textContent = id;
    document.getElementById('project-bio').textContent = projects[id].bio;

    document.getElementById('project-copyright').textContent = projects[id].copyright;
    document.getElementById('project-copyright').setAttribute('href',projects[id].links[0].link);

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
        }

        document.getElementById('project-links').appendChild(elem);
    }
}