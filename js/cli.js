// cli


let projects = {
    'laser-tag': {
        bio: 'a WIP(!) massive crossbow-based Minecraft shooter game which aims to contain a variety of minigames, maps, and advanced configuration.',
        links: [
            {
                type: 'sauce',
                link: 'https://github.com/katelyynn/laser-tag'
            }
        ]
    }
};


function view_project(id) {
    document.getElementById('project-side').classList.remove('hidden');

    document.getElementById('project-title').textContent = id;
    document.getElementById('project-bio').textContent = projects[id].bio;
    document.getElementById('project-image').setAttribute('src',`../img/project/${id}.png`);

    document.getElementById('project-links').innerHTML = '';
    for (let link in projects[id].links) {
        let this_link = projects[id].links[link];

        let elem = document.createElement('a');
        elem.classList.add('btn');
        elem.setAttribute('href',this_link.link);

        if (this_link.type == 'sauce') {
            elem.textContent = 'view sauce';
        }

        document.getElementById('project-links').appendChild(elem);
    }
}