let settings_storage = {
    home: {
        tabs: [
            'about'
        ]
    }
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


    load_settings('home');
}

function load_settings(page) {
    load_nav(page);
}

function load_nav(id) {
    page.structure.nav.innerHTML = '';

    let list = settings_storage[id].tabs;
    list.forEach((item, index) => {
        let button = document.createElement('button');
        button.classList.add('settings-nav-list-item');
        button.textContent = trans[lang].apps.pc_settings.pages[id].tabs[item];

        button.setAttribute('onclick', 'no_settings()');

        if (index == 0) {
            load_page(id, item);

            button.classList.add('active');
        }

        page.structure.nav.appendChild(button);
    });
}

function load_page(tab_id, id) {
    if (tab_id == 'home') {
        if (id == 'about') {
            page.structure.content.innerHTML = (`
                <h1>About</h1>
                <p>hello!!!</p>
            `);
        }
    }
}

function no_settings() {
    modal({
        id: 'no_settings',
        title: 'eek >w<',
        body: (`
            <p>This isn't available yet..</p>
            <div class="modal-fill"></div>
            <div class="modal-buttons">
                <button class="metro-button primary" onclick="modal_rm({id: 'no_settings'})">
                    <span class="button-text">Cancel</span>
                </button>
            </div>
        `)
    });
}