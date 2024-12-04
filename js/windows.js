// show pop-up windows


function install_theme() {
    open(`https://github.com/katelyynn/bleh/raw/uwu/fm/bleh.user.js`);
    kill_windows();
    create_window('Installing bleh',`
        If you have the script installed (see below), hit continue.
        <br><br>
        <img src="/img/install-script.png">
        `,[
        {
            'text': 'Continue',
            'type': 'brand',
            'onclick': `finish_theme()`
        }
    ],'migrate_3');
}

function finish_theme() {
    if (chosen_browser == 'firefox') {
        finish_theme_fully();
    } else {
        kill_windows();
        create_window('Installing bleh',`
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
        ],'chrome_prompt');
    }
}

function prompt_restart() {
    kill_windows();
        create_window('Migrating to bleh³',`
            For developer mode to take effect you must close and reopen your browser, after that you're all set.
            `,[],'prompt_restart');
}

function finish_theme_fully() {
    open('https://www.last.fm/bleh');
    kill_windows();
    create_window('Installing bleh',`
    You may now close this tab.
    <div class="alert">
        <strong>Things not looking right?</strong> - head over to the <a href="https://github.com/katelyynn/bleh/wiki/FAQ">FAQ</a> or <a href="https://github.com/katelyynn/bleh/issues/new/choose">report a bug</a>
    </div>
    `,[],'installation_finished');
}


function create_install_window2() {
    /*create_window('hey!','<strong>This theme uses the Tampermonkey browser extension.</strong><br><br>Do you have it installed?',[
        {
            'text': 'Yes, I have Tampermonkey',
            'onclick': `install_theme_final()`
        },
        {
            'text': 'No, please install it',
            'onclick': `install_tm()`,
            'type': 'primary'
        }
    ],'install_theme');*/
    install_tm();
}


function install_tm() {
    kill_windows();
    create_window('Install Tampermonkey',`
    <p>Depending on your browser, choose either option.</p>
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
    <p class="caption no-line">There are alternatives available, such as <a href="https://violentmonkey.github.io/get-it/" target="_blank">ViolentMonkey</a>!</p>
    <div class="alert">
        <strong>Use a regular browser if possible</strong> - older versions (such as ESR builds) of browsers are known to cause issues
    </div>
    `,[],'install_tm');
}

function chosen_chrome() {
    chosen_browser = 'chrome';
    open('https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo');
    install_theme_final();
}

function chosen_firefox() {
    chosen_browser = 'firefox';
    open('https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/');
    install_theme_final();
}


function install_theme_final() {
    kill_windows();
    create_window('Install theme',`
    Almost done! Once you have the extension installed, hit the button below to install the script.
    <br><br>
    <img src="/img/install-script.png" style="width: 600px">
    `,[
        {
            'text': 'Install theme',
            'onclick': `install_theme()`,
            'type': 'brand'
        }
    ],'finish_theme');
}


let confirm_info = {
    'delete': {
        'icon': 'trash-2',
        'title': 'Confirm deletion of'
    },
    'update-theme': {
        'icon': 'rotate-ccw',
        'title': 'Confirm updating of'
    }
}
let confirm_actions = {
    'cancel': {
        'text': 'Cancel. Go back.',
        'action': 'exit_windows()'
    }
}

/**
 * confirm window
 * @param {string} type specify the confirm type
 * @param {string} details confirmation's description
 * @param {array} actions all button actions
 */
function confirm(type,details,actions) {
    let em_confirm = document.createElement('div');
    em_confirm.classList.add('confirm');
    em_confirm.setAttribute('confirm-type',type);
    em_confirm.innerHTML = (`
    <div class="icon">
        <div class="icon-cont"><i class="icon w-64" data-lucide="${confirm_info[type].icon}"></i></div>
    </div>
    <div class="info">
        <h2>${confirm_info[type].title}</h2>
        <h3>${details}</h3>
    </div>
    `);

    let em_confirm_actions = document.createElement('div');
    em_confirm_actions.classList.add('actions');
    for (let i in actions) {
        // text
        let text = actions[i].text;
        if (text == undefined)
            text = confirm_actions[actions[i].type].text;
        // action
        let em_action = actions[i].action;
        if (em_action == undefined)
            em_action = confirm_actions[actions[i].type].action;

        let em_confirm_action = document.createElement('div');
        em_confirm_action.classList.add('action-cont');
        em_confirm_action.innerHTML = (`
        <button class="action ${actions[i].type}" onclick="${em_action}"><span class="content">${text}</span></button>
        `);

        em_confirm_actions.appendChild(em_confirm_action);
    }
    em_confirm.appendChild(em_confirm_actions);

    em_window_parent.appendChild(em_confirm);
    lucide.createIcons();
}