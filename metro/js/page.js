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
    `);

    page.structure.container.appendChild(header);
    page.structure.header = header;

    page.state.tiles = true;
    page.structure.tiles.wrap = load_tiles();


    create_tile_group({
        id: 'kat',
        gap: true
    });
    create_tile_group({
        id: 'kat2'
    });
    create_tile_group({
        id: 'kat3'
    });
    create_tile_group({
        id: 'kat4',
        gap: true
    });

    create_tile({
        id: 'mail',
        group: 'kat',
        width: 2,
        height: 1
    });
    create_tile({
        id: 'sports',
        group: 'kat',
        width: 2,
        height: 1
    });
    create_tile({
        id: 'people',
        group: 'kat',
        width: 1,
        height: 1
    });
    create_tile({
        id: 'people',
        group: 'kat',
        width: 1,
        height: 1
    });
    create_tile({
        id: 'desktop',
        group: 'kat',
        width: 1,
        height: 1
    });
    create_tile({
        id: 'this_pc',
        group: 'kat',
        width: 0,
        height: 0
    });
    create_tile({
        id: 'pc_settings',
        group: 'kat',
        width: 0,
        height: 0
    });
    create_tile({
        id: 'documents',
        group: 'kat',
        width: 0,
        height: 0
    });
    create_tile({
        id: 'pictures',
        group: 'kat',
        width: 0,
        height: 0
    });
    create_tile({
        id: 'calendar',
        group: 'kat',
        width: 2,
        height: 1
    });

    create_tile({
        id: 'money',
        group: 'kat2',
        width: 2,
        height: 1
    });
    create_tile({
        id: 'weather',
        group: 'kat2',
        width: 2,
        height: 2
    });
    create_tile({
        id: 'iexplore',
        group: 'kat2',
        width: 1,
        height: 1
    });
    create_tile({
        id: 'help',
        group: 'kat2',
        width: 1,
        height: 1
    });

    create_tile({
        id: 'photos',
        group: 'kat3',
        width: 1,
        height: 1
    });
    create_tile({
        id: 'news',
        group: 'kat3',
        width: 2,
        height: 1
    });

    create_tile({
        id: 'store',
        group: 'kat4',
        width: 2,
        height: 2
    });
}