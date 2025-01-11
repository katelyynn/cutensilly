function register({
    id = null
}) {
    if (!id) {
        log('no id provided', 'page');
        return;
    }

    if (page.state.transitioning) {
        log('transitioning, rejected', 'page');
        return;
    }

    let previous_id = page.state.id;
    page.state.id = id;
    log(`attempting load of ${id}`, 'page');

    page.state.id_storage = id;

    if (id == 'start') {
        start();
        return;
    } else if (id == 'pc_settings') {
        register_splash();
        return;
    } else if (id == 'store') {
        register_splash();
        return;
    }

    page.state.id = previous_id;

    try {
        modal({
            id: 'error',
            title: '>o<',
            body: (`
                <p>Loading of app id ${id} failed, is there a function for this?</p>
                <div class="modal-fill"></div>
                <div class="modal-buttons">
                    <button class="metro-button primary" onclick="modal_rm({id: 'error'})">
                        <span class="button-text">Cancel</span>
                    </button>
                </div>
            `)
        });
    } catch(e) {
        alert(`Loading of app id ${id} failed, is there a function for this?`);
    }
}

function register_splash() {
    page.state.transitioning = true;

    let splash = document.createElement('div');
    splash.classList.add('splash');
    splash.setAttribute('data-tile-id', page.state.id_storage);
    splash.innerHTML = (`
        <i class="splash-icon icon" data-lucide="${trans[lang].apps[page.state.id_storage].icon}"></i>
    `);

    document.body.appendChild(splash);

    lucide.createIcons();

    setTimeout(function() {
        register_load();
    }, 600);

    setTimeout(function() {
        document.body.removeChild(splash);
        page.state.transitioning = false;
    }, 1000);
}

function register_load() {
    try {
        if (page.state.id == 'pc_settings') {
            settings();
        } else if (page.state.id == 'store') {
            store();
        }
    } catch(e) {
        modal({
            id: 'error',
            title: 'eek >w<',
            body: (`
                <p>There was an error loading this page (${page.state.id})</p>
                <p>Error information available:</p>
                <p>${e}</p>
                <div class="modal-fill"></div>
                <div class="modal-buttons">
                    <button class="metro-button primary" onclick="modal_rm({id: 'error'})">
                        <span class="button-text">Done</span>
                    </button>
                </div>
            `)
        });
        console.error(e);
    }
}

function start() {
    titlebar_rm();

    page.structure.wrap.innerHTML = '';

    page.structure.container = load_container();

    let header = document.createElement('div');
    header.classList.add('start-header');

    header.innerHTML = (`
        <div class="header-text">
            ${trans[lang].start}
        </div>
        <div class="user-container">
            <button class="user-button">
                <span class="user-name">katelyn</span>
                <img class="user-img" src="/metro/img/avi.png">
            </button>
        </div>
        <button class="start-top-button" onclick="charms('start')">
            <i class="start-top-button-icon icon" data-lucide="settings"></i>
            Settings
        </button>
        <button class="start-top-button" onclick="charms('search')">
            <i class="start-top-button-icon icon" data-lucide="search"></i>
            Search
        </button>
    `);

    page.structure.container.appendChild(header);
    page.structure.header = header;

    let user_button = header.querySelector('.user-button');
    tippy(user_button, {
        theme: 'menu',
        content: (`
            <button class="menu-item">
                Change account picture
            </button>
            <button class="menu-item">
                Lock
            </button>
            <button class="menu-item">
                Sign out
            </button>
        `),
        allowHTML: true,
        placement: 'bottom',
        interactive: true,
        trigger: 'click',
        delay: [0, 0]
    });

    page.state.tiles = true;
    page.structure.tiles.wrap = load_tiles();


    create_tile_group({
        id: 'kat',
        gap: true,
        index: 1
    });
    create_tile_group({
        id: 'kat2',
        index: 2
    });
    create_tile_group({
        id: 'kat3',
        index: 3
    });
    create_tile_group({
        id: 'kat4',
        gap: true,
        index: 4
    });

    create_tile({
        id: 'store',
        group: 'kat',
        width: 2,
        height: 2,
        action: {
            type: 'app',
            destination: 'store'
        }
    });
    create_tile({
        id: 'desktop',
        group: 'kat',
        width: 1,
        height: 1,
        image: '/metro/img/avi.png',
        action: {
            type: 'link',
            destination: '/desktop/'
        }
    });
    create_tile({
        id: 'pc_settings',
        group: 'kat',
        width: 1,
        height: 1,
        action: {
            type: 'app',
            destination: 'pc_settings'
        }
    });
    create_tile({
        id: 'mail',
        group: 'kat',
        width: 1,
        height: 1,
        icon: 'mail'
    });
    create_tile({
        id: 'sponsor',
        group: 'kat',
        width: 1,
        height: 1,
        action: {
            type: 'app',
            destination: 'sponsor'
        }
    });
    create_tile({
        id: 'calendar',
        group: 'kat',
        width: 2,
        height: 1,
        icon: 'calendar'
    });

    create_tile({
        id: 'music',
        group: 'kat2',
        width: 2,
        height: 1,
        icon: 'music'
    });
    create_tile({
        id: 'news',
        group: 'kat2',
        width: 2,
        height: 1,
        icon: 'newspaper'
    });
    create_tile({
        id: 'weather',
        group: 'kat2',
        width: 2,
        height: 2,
        icon: 'sun'
    });
    create_tile({
        id: 'iexplore',
        group: 'kat2',
        width: 1,
        height: 1,
        icon: 'compass'
    });
    create_tile({
        id: 'help',
        group: 'kat2',
        width: 1,
        height: 1,
        icon: 'circle-help'
    });

    create_tile({
        id: 'photos',
        group: 'kat3',
        width: 1,
        height: 1,
        icon: 'book-image'
    });
    create_tile({
        id: 'sports',
        group: 'kat3',
        width: 2,
        height: 1,
        icon: 'trophy',
        action: {
            destination: 'explode()'
        }
    });
    create_tile({
        id: 'lastfm',
        group: 'kat3',
        width: 1,
        height: 1,
        icon_image: 'lastfm',
        action: {
            type: 'link',
            destination: 'https://last.fm/user/cutensilly'
        }
    });
    create_tile({
        group: 'kat3',
        width: 1,
        height: 1,
        action: {
            destination: `charms()`
        }
    });

    lucide.createIcons();
}