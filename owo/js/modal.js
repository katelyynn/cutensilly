/* windows */
function create_window(title, text, actions, id, icon = '', html_header = false, attr = {identifier: 'none'}) {
    let em = document.createElement('div');
    em.classList.add('window');
    em.setAttribute('id',`window_${id}`);

    let icon_txt = '';
    if (icon != '') icon_txt = `<span class="icon"><i class="icon w-18" data-lucide="${icon}"></i></span>`;

    if (html_header)
        em.innerHTML = (`
        <header>
            ${title}${icon_txt}
        </header>
        <main>
            ${text}
        </main>
        `);
    else
        em.innerHTML = (`
        <header>
            <h5>${title}</h5>${icon_txt}
        </header>
        <main>
            ${text}
        </main>
        `);

    let em_foot = document.createElement('footer');

    for (let action in actions) {
        let act = actions[action];

        let btn = document.createElement('a');
        btn.classList.add('btn');

        if (act.type != undefined && act.type != 'brand')
            btn.classList.add(act.type);
        else if (act.type == 'brand')
            btn.classList.add('primary','brand');

        if (act.onclick != undefined)
            btn.setAttribute('onclick',act.onclick);

        if (act.link != undefined)
            btn.href = act.link;

        btn.target = '_blank';
        btn.textContent = act.text;
        em_foot.appendChild(btn);
    }

    em.appendChild(em_foot);
    document.getElementById('hook_windows').appendChild(em);
    lucide.createIcons();
}


/* chips */
function create_chip(text, type = '', kill = true, icon = '') {
    let em = document.createElement('div');
    em.classList.add('chip');
    if (type != '') em.classList.add(type);
    em.setAttribute('onclick','kill_modal(this)');

    let icon_txt = '';
    if (icon != '') icon_txt = `<span class="icon"><i class="icon w-16" data-lucide="${icon}"></i></span>`;

    em.innerHTML = `${icon_txt}<span class="text">${text}</span>`;
    document.getElementById('hook_chips').appendChild(em);

    if (kill)
        setTimeout(function() {
            kill_modal(em);
        },4000);
}


function kill_modal(em, type = 'chip') {
    let element = em;
    element.classList.add('removing');

    setTimeout(function() {
        element.remove();
        if (type == 'window') document.getElementById('hook_windows').innerHTML = '';
    }, 290);
}

function kill_window(id) {
    kill_modal(document.getElementById(`window_${id}`), 'window');
}
function kill_windows() {
    document.getElementById('hook_windows').innerHTML = ``;
}