let page = {
    state: {
        id: null,
        tiles: false
    },
    structure: {
        wrap: null,
        tiles: {
            wrap: null,
            groups: {}
        }
    }
}

load_page();

function load_page() {
    page.structure.wrap = document.body.querySelector('.metro');

    log('registered', 'page');
}

function load_container() {
    let container = document.createElement('div');
    container.classList.add('container');

    page.structure.wrap.appendChild(container);
    return container;
}