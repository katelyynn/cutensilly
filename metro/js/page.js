function register({
    id = null
}) {
    if (!id) {
        log('no id provided', 'page');
        return;
    }

    let previous_id = page.state.id;
    page.state.id = id;
    log(`attempting load of ${id}`, 'page');

    if (id == 'start') {
        start();
        return;
    } else if (id == 'pc_settings') {
        settings();
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
        id: 'music',
        group: 'kat',
        width: 2,
        height: 1,
        icon: 'music'
    });
    create_tile({
        id: 'sports',
        group: 'kat',
        width: 2,
        height: 1,
        icon: 'trophy',
        action: {
            destination: 'explode()'
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
        id: 'people',
        group: 'kat',
        width: 1,
        height: 1,
        icon: 'users'
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
        id: 'this_pc',
        group: 'kat',
        width: 0,
        height: 0,
        icon: 'monitor'
    });
    create_tile({
        id: 'pc_settings',
        group: 'kat',
        width: 0,
        height: 0,
        action: {
            type: 'app',
            destination: 'pc_settings'
        }
    });
    create_tile({
        id: 'documents',
        group: 'kat',
        width: 0,
        height: 0,
        icon: 'file-text'
    });
    create_tile({
        id: 'pictures',
        group: 'kat',
        width: 0,
        height: 0,
        icon: 'album'
    });
    create_tile({
        id: 'calendar',
        group: 'kat',
        width: 2,
        height: 1,
        icon: 'calendar'
    });

    create_tile({
        id: 'sponsor',
        group: 'kat2',
        width: 2,
        height: 1,
        icon: 'heart',
        action: {
            type: 'app',
            destination: 'sponsor'
        }
    });
    create_tile({
        id: 'money',
        group: 'kat2',
        width: 2,
        height: 1,
        icon: 'chart-no-axes-combined'
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
        id: 'news',
        group: 'kat3',
        width: 2,
        height: 1,
        icon: 'newspaper'
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
        id: 'store',
        group: 'kat4',
        width: 2,
        height: 2,
        icon: 'shopping-cart'
    });

    lucide.createIcons();
}

function settings() {
    titlebar();

    page.structure.wrap.innerHTML = '';

    let container = document.createElement('div');
    container.classList.add('settings-container');

    page.structure.container = container;
    page.structure.wrap.appendChild(container);

    let nav = document.createElement('div');
    nav.classList.add('settings-nav');
    nav.innerHTML = (`
        <div class="settings-nav-header">
            <div class="settings-nav-text">
                ${trans[lang].apps.pc_settings.name}
            </div>
        </div>
    `);

    let nav_list = document.createElement('div');
    nav_list.classList.add('settings-nav-list');

    page.structure.nav = nav_list;

    nav.appendChild(nav_list);
    container.appendChild(nav);


    let content = document.createElement('div');
    content.classList.add('settings-content');

    let content_inner = document.createElement('div');
    content_inner.classList.add('settings-content-inner');

    page.structure.content = content_inner;

    content.appendChild(content_inner);
    page.structure.container.appendChild(content);
}