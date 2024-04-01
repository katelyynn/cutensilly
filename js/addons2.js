function install_addon(type, is_script = false) {
    let extension = 'css';
    if (is_script) extension = 'js';

    open(`https://github.com/katelyynn/bleh/raw/uwu/lastfm-${type}.user.${extension}`);
    kill_windows();
}

function install_theme() {
    open(`https://github.com/katelyynn/bleh/raw/uwu/lastfm-bleh2.user.css`);
    kill_windows();
}


let style_addons = [
    'main',
    'bleh2-oled',
    'bleh2-accent'
]
let latest_versions = {
    'main': 2024.0401,
    'bleh2-oled': 2024.0320,
    'bleh2-accent': 2024.0320,
}
let any_updates_available = false;
let sent_update_notif = false;
let is_sneek = false;
function query_versions() {
    any_updates_available = false;
    for (let addon in style_addons) {
        get_version(style_addons[addon]);
        check_update(style_addons[addon]);

        if (style_addons[addon] != 'main') {
            try {
            document.getElementById(`install-${style_addons[addon]}`).setAttribute('data-kate-status',`${need_updates[style_addons[addon]]}`);
            } catch(e) {}
        }
    }

    /*if (any_updates_available) {
        document.getElementById('chip').classList.add('shown');
    } else {
        document.getElementById('chip').classList.remove('shown');
    }*/

    try {
    if (need_updates.main > -2 && need_updates.main < 1) {
        document.getElementById('theme-update').classList.remove('primary');
        document.getElementById('theme-update').classList.add('outline');
    } else {
        document.getElementById('theme-update').classList.add('primary');
        document.getElementById('theme-update').classList.remove('outline');
    }

    if (need_updates.main > -2) {
        document.getElementById('sneek').textContent = 'sneek';
    } else {
        document.getElementById('sneek').textContent = 'sleek';
    }

    if (need_updates.main == -1) {
        document.getElementById('theme-ver').textContent = 'Downgrade';
        document.getElementById('theme-update').classList.remove('ultra-shine');
        document.getElementById('theme-update').style.removeProperty('--base-hue');
    } else if (need_updates.main == 0) {
        document.getElementById('theme-ver').textContent = 'Reinstall';
        document.getElementById('theme-update').classList.remove('ultra-shine');
        document.getElementById('theme-update').style.removeProperty('--base-hue');
    } else if (need_updates.main != -2) {
        document.getElementById('theme-ver').textContent = 'Update';
        document.getElementById('theme-update').style.setProperty('--base-hue','130');
        if (!sent_update_notif) create_chip('You have a theme update available!','success')
        sent_update_notif = true;
    }
    } catch(e) {console.log(e)}
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