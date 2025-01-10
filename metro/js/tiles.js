function load_tiles() {
    let tiles = document.createElement('div');
    tiles.classList.add('tiles');

    page.structure.container.appendChild(tiles);

    return tiles;
}

function create_tile_group({
    id = id,
    main_text = '',
    return_group = false,
    size = 0,
    gap = false
}) {
    let tile_group_wrap = document.createElement('div');
    tile_group_wrap.classList.add('tiles-group-wrap');
    tile_group_wrap.setAttribute('data-gap', gap);
    if (main_text != null) {
        tile_group_wrap.innerHTML = (`
            <h1 class="tiles-group-title">${id} ${main_text}</h1>
        `);
    }

    let tile_group = document.createElement('ul');
    tile_group.classList.add('tiles-group');
    tile_group.setAttribute('data-size', size);

    page.structure.tiles.groups[id] = tile_group;
    tile_group_wrap.appendChild(tile_group);
    page.structure.tiles.wrap.appendChild(tile_group_wrap);

    if (return_group)
        return tile_group_wrap;
}

function create_tile({
    type = '',
    id,
    group,
    width = 2,
    height = 2,
    image = null,
    link = null,
    link_type = 'button',
    main_text = null,
    alt_text = null,
    return_tile = false,
    active = false
}) {
    // this isnt a custom tile
    if (main_text == null && alt_text == null && trans[lang].apps.hasOwnProperty(id)) {
        main_text = trans[lang].apps[id].name;
    }

    let tile = document.createElement((link_type == 'link') ? 'a' : 'button');
    tile.classList.add('tile');
    tile.setAttribute('data-tile-type', type);
    tile.setAttribute('data-tile-id', id);
    tile.setAttribute('data-tile-width', width);
    tile.setAttribute('data-tile-height', height);
    tile.innerHTML = (`
        <div class="tile-bg-wrap">
            <div class="tile-icon icon"></div>
            ${(image != null) ? `<img class="tile-bg" src="${image}" crossorigin="anonymous">` : ''}
        </div>
        <div class="tile-text">
            ${(main_text != null ? `<div class="main-text">${main_text}</div>` : `<div class="main-text">${id}</div>`)}
            ${(alt_text != null ? `<div class="alt-text">${alt_text}</div>` : '')}
        </div>
    `);

    if (active)
        tile.classList.add('active');

    if (link != null) {
        if (link_type == 'link') {
            tile.setAttribute('href', link);

            tile.addEventListener('click', (e) => {
                buffer();
            });
        } else {
            tile.setAttribute('onclick', link);
        }
    }

    if (width == height)
        tile.setAttribute('data-tile-square', 'true');

    tippy(tile, {
        content: (`
            ${type}<br>
            ${id}<br>
            ${width}x${height}
        `),
        allowHTML: true
    });

    if (return_tile) {
        return tile;
    } else {
        try {
            page.structure.tiles.groups[group].appendChild(tile);
        } catch(e) {
            log('group does not exist', 'tile', 'error');
            console.error(e);
        }
    }
}