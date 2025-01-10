function register({
    id = null
}) {
    if (!id) {
        log('no id provided', 'page');
        return;
    }

    page.state.id = id;
    log(`attempting load of ${id}`, 'page');

    if (id == 'start') {
        start();
    }
}

function start() {
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
        image: '/metro/img/avi.png'
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
        icon: 'settings'
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
        icon: 'heart'
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