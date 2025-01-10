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

document.body.addEventListener('click', (e) => {
    if (page.state.charms && page.state.charms_can_close) {
        charms_rm();
    }
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


function titlebar() {
    let bar_wrap = page.structure.titlebar;

    if (!bar_wrap)
        bar_wrap = document.createElement('div');
    bar_wrap.classList.add('titlebar-wrap');
    bar_wrap.innerHTML = (`
        <div class="titlebar">
            <div class="titlebar-icon-wrap">
                <div class="titlebar-icon" data-tile-id="${page.state.id}">
                    <i class="titlebar-icon-inner icon" data-lucide="${(trans[lang].apps.hasOwnProperty(page.state.id)) ? trans[lang].apps[page.state.id].icon : ''}"></i>
                </div>
            </div>
            <div class="titlebar-name">
                ${(trans[lang].apps.hasOwnProperty(page.state.id)) ? trans[lang].apps[page.state.id].name : page.state.id}
            </div>
            <div class="titlebar-buttons">
                <button class="titlebar-button close" onclick="register({id: 'start'})">
                    <i class="titlebar-button-icon icon" data-lucide="x"></i>
                    Close
                </button>
            </div>
        </div>
    `);

    document.body.appendChild(bar_wrap);
    page.structure.titlebar = bar_wrap;

    lucide.createIcons();
}
function titlebar_rm() {
    if (page.structure.titlebar)
        document.body.removeChild(page.structure.titlebar);
}