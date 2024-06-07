function migrate() {
    create_window('Migrating to bleh³',`
        While previous versions of bleh were installed as styles, the latest is now (basically) an extension.
        <br><br>
        <strong>To migrate, you must first disable the current bleh.</strong>
        <br>
        <div class="steps-images">
            <img src="/img/open-stylus.png">
            <img src="/img/disable-theme.png">
        </div>
        `,[
        {
            'text': 'Continue',
            'type': 'primary',
            'onclick': `migrate_1()`
        }
    ],'migrate');
}

function migrate_1() {
    kill_windows();
    create_window('Migrating to bleh³',`
        bleh now uses a different extension to load. Pick your browser below.
        <div class="browser-choices">
            <a class="btn browser" href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank">
                <img class="browser-icon" src="/img/chrome.png">
                <p>Chrome</p>
                <p class="caption">for Chrome, Edge, Brave, Opera</p>
            </a>
            <a class="btn browser" href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/" target="_blank">
                <img class="browser-icon" src="/img/firefox.png">
                <p>Firefox</p>
                <p class="caption">for Firefox only</p>
            </a>
        </div>
        `,[
        {
            'text': 'Continue',
            'type': 'primary',
            'onclick': `migrate_2()`
        }
    ],'migrate_1');
}

function migrate_2() {
    kill_windows();
    create_window('Migrating to bleh³',`
        Almost done! Once you have the extension installed, hit the button below to install the style.
        <br><br>
        <img src="/img/install-script.png">
        `,[
        {
            'text': 'Install bleh³',
            'type': 'brand',
            'onclick': `migrate_3()`
        }
    ],'migrate_2');
}

function migrate_3() {
    open(`https://github.com/katelyynn/bleh/raw/uwu/fm/bleh.user.js`);
    kill_windows();
    create_window('Migrating to bleh³',`
        If you have the script installed (see below), hit continue.
        <br><br>
        <img src="/img/install-script.png">
        `,[
        {
            'text': 'Continue',
            'type': 'brand',
            'onclick': `finish_migration()`
        }
    ],'migrate_3');
}

function finish_migration() {
    open('https://www.last.fm/bleh');
    kill_windows();
    create_window('Migrated to bleh³','You may now close this tab.',[],'migration_finished');
}