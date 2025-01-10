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

tippy.setDefaultProps({
    arrow: false,
    duration: [300, 150],
    delay: [650, 50]
});

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    //alert('hey >o< stop doing that,,');

    /*let menu = tippy(document.body, {
        content: 'hey >o< stop that'
    });

    menu.setProps({
        getReferenceClientRect: () => ({
            width: 0,
            height: 0,
            top: e.clientY,
            bottom: e.clientY,
            left: e.clientX,
            right: e.clientX,
        }),
    });

    menu.show();*/
});