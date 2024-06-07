let style_addons = [
    'main'
]
function query_versions() {
    any_updates_available = false;
    for (let addon in style_addons) {
        get_version(style_addons[addon]);
        check_update(style_addons[addon]);
    }

    // hide dashboard on main page
    if (!isNaN(versions.main)) {
        window.location.href = '/bleh/fm/migrate';
    }
}


document.onload = start_versions();
function start_versions() {
    query_versions();
    setInterval(query_versions,50);
}