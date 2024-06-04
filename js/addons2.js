let style_addons = [
    'main',
    'bleh2-oled',
    'bleh2-accent',
    'bleh2-light'
]
let latest_versions = {
    'main': 2024.0604,
    'bleh2-oled': 2024.0531,
    'bleh2-accent': 2024.0320,
    'bleh2-light': 2024.0603
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

    try {
    if (need_updates.main > -2 && need_updates.main < 1) {
        document.getElementById('theme-update').classList.remove('primary');
    } else {
        document.getElementById('theme-update').classList.add('primary');
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
        document.getElementById('theme-ver').textContent = `Update to ${pad_ver(latest_versions.main)}`;
        document.getElementById('theme-update').style.setProperty('--hue','130');
        if (!sent_update_notif) create_window('One moment','There is a theme update available, click to update!',[
            {
                'text': 'Update now',
                'link': 'https://github.com/katelyynn/bleh/raw/uwu/lastfm-bleh2.user.css',
                'type': 'primary'
            },
            {
                'text': 'Dismiss for now',
                'onclick': 'kill_windows()'
            }
        ],'update_theme');
        sent_update_notif = true;
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