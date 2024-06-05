let style_addons = [
    'main',
    'bleh2-oled',
    'bleh2-accent',
    'bleh2-light'
]
let latest_versions = {
    'main': 2024.0605,
    'bleh2-oled': 2024.0531,
    'bleh2-accent': 2024.0320,
    'bleh2-light': 2024.0603
}
let any_updates_available = false;
let sent_update_notif = false;
function query_versions() {
    any_updates_available = false;
    for (let addon in style_addons) {
        get_version(style_addons[addon]);
        check_update(style_addons[addon]);
    }

    // hide dashboard on main page
    if (isNaN(versions.main)) {
        document.getElementById('dashboard').style.setProperty('display','none');
    } else {
        document.getElementById('dashboard').style.removeProperty('display');
    }

    // display version number
    try {
    document.getElementById('current-version').textContent = versions.main;
    document.getElementById('latest-version').textContent = latest_versions.main;

    // update action
    if (need_updates.main == -1) {
        document.getElementById('update-action').classList.remove('update');
        document.getElementById('update-action').classList.add('downgrade');
        document.getElementById('update-text').textContent = 'Downgrade';
    } else if (need_updates.main == 0) {
        document.getElementById('update-action').classList.remove('update');
        document.getElementById('update-action').classList.remove('downgrade');
        document.getElementById('update-text').textContent = 'Reinstall';
    } else if (need_updates.main != -2) {
        document.getElementById('update-action').classList.add('update');
        document.getElementById('update-action').classList.remove('downgrade');
        document.getElementById('update-text').textContent = 'Update';
    }
    } catch(e) {console.log(e)}
}


// pad version number if needed
function pad_ver(ver) {
    let ver_len = `${ver}`.length;
    if (ver_len < 9) return `${ver}0`;
    else return ver;
}


let versions = {};
let need_updates = {};
function get_version(type) {
    if (type == 'main') {
        versions.main = parseFloat(getComputedStyle(document.body).getPropertyValue('--bleh2-ver'));
    } else {
        versions[type] = parseFloat(getComputedStyle(document.body).getPropertyValue(`--${type}-ver`));
    }
}

function check_update(type) {
    let current = versions[type];
    let latest = latest_versions[type];
    let status = -2;

    if (latest > current)
        status = 1;
    else if (current > latest)
        status = -1;
    else if (current == latest)
        status = 0;

    if (current == '')
        status = -2;

    if (status == 1)
        any_updates_available = true;

    need_updates[type] = status;
}


document.onload = start_versions();
function start_versions() {
    query_versions();
    setInterval(query_versions,50);
}