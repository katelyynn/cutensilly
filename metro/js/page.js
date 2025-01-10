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
        id: 'kat'
    });

    create_tile({
        type: 'wardrobe',
        id: 'wardrobe',
        group: 'kat',
        width: 1,
        height: 1
    });
    create_tile({
        type: 'wardrobe',
        id: 'Calendar',
        group: 'kat',
        width: 2,
        height: 1
    });
}