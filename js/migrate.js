function migrate() {
    create_window('Migrating to bleh³',`
        While previous versions of bleh were installed as styles, the latest is now (basically) an extension.
        <br><br>
        <strong>To migrate, you must first disable the current bleh theme and any addons.</strong>
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

let chosen_browser = 'chrome';

function migrate_1() {
    kill_windows();
    create_window('Migrating to bleh³',`
        bleh now uses a different extension to load. Pick your browser below.
        <div class="browser-choices">
            <button class="btn browser" onclick="chosen_chrome()">
                <img class="browser-icon" src="/img/chrome.png">
                <p>Chrome</p>
                <p class="caption">for Chrome, Edge, Brave, Opera</p>
            </button>
            <button class="btn browser" onclick="chosen_firefox()">
                <img class="browser-icon" src="/img/firefox.png">
                <p>Firefox</p>
                <p class="caption">for Firefox only</p>
            </button>
        </div>
        `,[],'migrate_1');
}

function chosen_chrome() {
    chosen_browser = 'chrome';
    open('https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo');
    migrate_2();
}

function chosen_firefox() {
    chosen_browser = 'firefox';
    open('https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/');
    migrate_2();
}

function migrate_2() {
    kill_windows();
    create_window('Migrating to bleh³',`
        Almost done! Once you have the extension installed, hit the button below to install the script.
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
    if (chosen_browser == 'firefox') {
        finish_migration_fully();
    } else {
        kill_windows();
        create_window('Migrating to bleh³',`
            Unfortunately on Chrome (and related browsers) you must enable developer mode.
            <br>Don't worry, it only takes these steps.
            <br><br>
            <div class="steps-images">
                <img src="/img/config-script-1.png">
                <img src="/img/config-script-2.png">
            </div>
            `,[
            {
                'text': 'Done!',
                'onclick': `prompt_restart()`
            }
        ],'migrate_3');
    }
}

function prompt_restart() {
    kill_windows();
        create_window('Migrating to bleh³',`
            For developer mode to take effect you must close and reopen your browser, after that you're all set.
            `,[],'prompt_restart');
}

function finish_migration_fully() {
    open('https://www.last.fm/bleh');
    kill_windows();
    create_window('Migrated to bleh³','You may now close this tab.',[],'migration_finished');
}