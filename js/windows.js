// show pop-up windows


let theme_windows = {
    'winter-haters': {
        'icon': 'snowflake',
        'name': 'undo winter effects',
        'description': '(limited for winter) removes the effects if u hate them',
        'image': '/img/shiggy-chilly.png'
    },
    'amoled': {
        'icon': 'moon-star',
        'name': 'amoled',
        'description': 'special addon for a darker feel!',
        'image': '/img/amoled.png'
    },
    'accent': {
        'icon': 'paintbrush',
        'name': 'album covers',
        'description': 'match the page accent to the album cover :3<br><br>note: only a select amount of albums are supported, a suggestions thread will be open soon!!',
        'image': '/img/accent.png',
        'status': 'wip'
    },
    'light': {
        'icon': 'sun',
        'name': 'light',
        'description': 'special addon for a brighter feel!',
        'image': '/img/light.png',
        'status': 'alpha'
    },
    'performance': {
        'icon': 'chevrons-down',
        'name': 'performance',
        'description': 'lower intensity of blurs n glows',
        'image': '/img/performance.png',
        'status': 'alpha'
    },
    'feat': {
        'icon': 'star',
        'name': 'feat. artists',
        'description': 'display featured artists in a cuter way',
        'image': '/img/feat.png'
    },
    'chart': {
        'icon': 'hash',
        'name': 'chart colours',
        'description': 'apply colour based on charting position',
        'image': '/img/chart.png'
    },
    'motion': {
        'icon': 'move-diagonal',
        'name': 'reduced motion',
        'description': 'remove significant page animations',
        'image': '/img/motion.png'
    },
    'covers': {
        'icon': 'gallery-vertical-end',
        'name': 'custom covers',
        'description': 'slightly tweaked album covers..',
        'image': '/img/covers.png',
        'status': 'wip'
    },
    'bleh2-oled': {
        'icon': 'moon-star',
        'name': 'OLED theme',
        'description': 'Special theme addon for the eyes.',
        'image': '/img/bleh2-addon-oled.png'
    },
    'bleh2-accent': {
        'icon': 'paintbrush',
        'name': 'Album covers',
        'description': 'Match the page colour to the album cover!',
        'image': '/img/bleh2-addon-accent.png',
        'status': 'wip'
    }
}

let status_texts = {
    'alpha': 'Alpha',
    'wip': 'WIP'
}

function create_theme_window(type,show_warning = false) {
    try {
        // status
        let status = need_updates[type];
        let status_str = status.toString();
        let btn_type = undefined;

        let stt_text = '';
        let stt_col = '';
        let stt_id = '';

        if (status == -2) {
            stt_text = 'Not installed';
            stt_col = 'updated';
            stt_id = 'uninstalled';
        } else if (status == -1) {
            stt_text = 'Installed';
            stt_col = 'away';
            stt_id = 'installed_newer';
        } else if (status == 1) {
            stt_text = 'Update available';
            stt_col = 'updated';
            stt_id = 'updates_available';
        } else if (status == 0) {
            stt_text = 'Installed';
            stt_col = 'offline';
            stt_id = 'installed';
        }

        if (status == 1 || status == -2)
            btn_type = 'primary';

        let html_title = `
        <h5>${theme_windows[type].name}</h5>
        <div class="status ${stt_col}" data-status-id="${stt_id}"><div class="status-dot"></div>${stt_text}</div>
        `;
        if (theme_windows[type].status != undefined)
            html_title = `
        <h5>${theme_windows[type].name}</h5>
        <div class="status ${stt_col}" data-status-id="${stt_id}"><div class="status-dot"></div>${stt_text}</div>
        <div class="badge" data-kate-type="${theme_windows[type].status}">${status_texts[theme_windows[type].status]}</div>
        `;

        let html_warning = '';
        if (show_warning)
            html_warning = '<h5 class="sub" data-kate-type="error">Version checking is not available for script addons.</h5>';

        create_window(html_title,`
        <p>${theme_windows[type].description}</p>
        <br>
        <img src="${theme_windows[type].image}" alt="${theme_windows[type].name}">
        ${html_warning}
        `,[
            {
                'text': 'Close',
                'onclick': 'kill_windows()',
                'type': 'mimic'
            },
            {
                'text': 'Install addon',
                'onclick': `install_addon('${type}',${show_warning})`,
                'type': btn_type
            }
        ],`theme_${stt_id}_${type}`,theme_windows[type].icon,true);
    } catch(e) {
        create_chip(`Interface for ${type} is not implemented.`,'error');
        console.error(e);
    }
}


function create_install_window() {
    create_window('hey!','<strong>Real quick,</strong> you are about to install a <i class="hi">legacy version</i> of bleh that is <i class="hi">no longer supported</i>. Are you sure?',[
        {
            'text': 'Continue',
            'onclick': `continue_with_bleh1()`,
            'type': 'mimic'
        },
        {
            'text': 'Cancel',
            'onclick': 'kill_windows()',
            'type': 'primary'
        }
    ],'install_theme')
}
function continue_with_bleh1() {
    kill_windows();
    create_install_window2();
}
function create_install_window2() {
    create_window('hey!','<strong>This theme uses the <a href="https://github.com/openstyles/stylus#releases" target="_blank">Stylus</a> browser extension.</strong><br><br>Ensure you have it installed before continuing.',[
        {
            'text': 'Cancel',
            'onclick': 'kill_windows()',
            'type': 'mimic'
        },
        {
            'text': 'Continue',
            'onclick': `install_theme()`
        }
    ],'install_theme')
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