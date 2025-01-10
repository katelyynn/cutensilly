page.state.charms = false;
page.state.charms_id = 'charms';

function charms(id = 'charms') {
    let charms_bar = page.structure.charms;
    if (!charms_bar)
        charms_bar = document.createElement('div');

    charms_bar.classList.add('charms');
    charms_bar.setAttribute('data-id', id);
    charms_bar.innerHTML = '';

    page.state.charms_id = id;

    if (id == 'charms') {
        charms_bar.innerHTML = (`
            <button class="charms-button" onclick="charms('search')">
                <i class="charms-button-icon icon" data-lucide="search"></i>
                <span class="charms-button-text">Search</span>
            </button>
            <button class="charms-button" onclick="charms('exit_to_start')">
                <i class="charms-button-icon icon" data-lucide="grid"></i>
                <span class="charms-button-text">Start</span>
            </button>
            <button class="charms-button" onclick="charms('settings')">
                <i class="charms-button-icon icon" data-lucide="settings"></i>
                <span class="charms-button-text">Settings</span>
            </button>
        `);
    } else if (id == 'start') {

    }

    document.body.appendChild(charms_bar);
    page.structure.charms = charms_bar;
    page.state.charms = true;

    page.state.charms_can_close = false;
    setTimeout(charms_allow_close, 100);

    lucide.createIcons();
}

function charms_rm() {
    page.state.charms = false;

    document.body.removeChild(page.structure.charms);
}

function charms_allow_close() {
    page.state.charms_can_close = true;
}