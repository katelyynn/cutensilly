// customise bleh :3


let options = {
    hue: {
        css: 'new-hue',
        unit: '',
        value: 255,
        type: 'slider'
    },
    sat: {
        css: 'new-sat',
        unit: '',
        value: 1,
        type: 'slider'
    },
    lit: {
        css: 'new-lit',
        unit: '',
        value: 1,
        type: 'slider'
    },
    ovr: {
        css: 'new-ovr',
        unit: '',
        value: 'var(--b7)',
        type: null
    },
    gloss: {
        css: 'new-gloss',
        unit: '',
        value: 0,
        type: 'slider'
    },
    main_width: {
        css: 'cards-main-width',
        unit: 'px',
        value: 902,
        type: 'slider'
    },
    nav: {
        css: 'head-small-nav',
        unit: '',
        value: 'unset',
        values: ['unset', 'none'],
        type: 'toggle'
    },
    auth_badge: {
        css: 'auth-badge',
        unit: '',
        value: 'none',
        values: ['none', 'flex'],
        type: null
    },
    hue_gradient: {
        css: 'hue-gradient',
        unit: '',
        value: '',
        values: {
            lesbian: {
                hue: 20,
                sat: 1.5,
                lit: 0.95,
                gradient: 'linear-gradient(to right, rgb(213, 44, 0), rgb(226, 150, 136), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(210, 127, 164), rgb(162, 2, 98))'
            },
            trans: {
                hue: 200,
                sat: 1,
                lit: 1,
                gradient: 'linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(246, 216, 221), rgb(247, 168, 184), rgb(179, 157, 233), rgb(85, 205, 252))'
            },
            fluid: {
                hue: 250,
                sat: 1.1,
                lit: 0.8,
                gradient: 'linear-gradient(to right, rgb(255, 120, 166), rgb(247, 196, 210), rgb(255, 255, 255) 23%, rgb(255, 255, 255), rgb(255, 255, 255) 28%, rgb(219, 148, 213), rgb(190, 20, 215), rgb(89, 22, 85), rgb(0, 0, 0) 73%, rgb(0, 0, 0), rgb(0, 0, 0) 78%, rgb(51, 36, 87), rgb(50, 60, 191))'
            }
        },
        type: 'hue_gradient'
    },
    gendered_tags: {
        css: 'gendered-tags',
        unit: '',
        value: 'none',
        values: ['none', 'flex'],
        type: 'toggle'
    }
}

let bleh = {};

// has user saved their settings?
let user_saved_settings = true;
document.body.setAttribute('data-is-saved',user_saved_settings);


function reset_all(dont_modify=false) {
    for (let item in options)
        reset_item(item, dont_modify);
}

function reset_item(item, dont_modify=false) {
    update_item(item, options[item].value, dont_modify);
}

function update_params(params={}, dont_modify=false) {
    for (let item in params) {
        update_item(item, params[item], dont_modify);
    }
}

function update_item(item, value, dont_modify=false) {
    if (options[item].type == 'slider')
        bleh[item] = value;

    if (dont_modify) {
        delete(bleh.hue_gradient);
    } else {
        // has the user changed any setting from default?
        let temp_has_changed_setting = false;

        for (let option in bleh)
            if (bleh[option] != options[option].value)
                temp_has_changed_setting = true;

        if (temp_has_changed_setting) {
            // user has changed a setting
            user_saved_settings = false;
            document.body.setAttribute('data-is-saved',user_saved_settings);
            window.addEventListener('beforeunload', leaving_prompt);
        } else {
            // user has not changed a setting
            user_saved_settings = true;
            document.body.setAttribute('data-is-saved',user_saved_settings);
            window.removeEventListener('beforeunload', leaving_prompt);
        }
    }

    // gradients
    if (item == 'hue_gradient') {
        bleh.hue = options.hue_gradient.values[value].hue;
        bleh.sat = options.hue_gradient.values[value].sat;
        bleh.lit = options.hue_gradient.values[value].lit;
        bleh.hue_gradient = options.hue_gradient.values[value].gradient;

        document.documentElement.style.setProperty(`--hue`,`${options.hue_gradient.values[value].hue}`);
        document.documentElement.style.setProperty(`--sat`,`${options.hue_gradient.values[value].sat}`);
        document.documentElement.style.setProperty(`--lit`,`${options.hue_gradient.values[value].lit}`);
        document.documentElement.style.setProperty(`--hue-gradient`,`${options.hue_gradient.values[value].gradient}`);

        /*document.getElementById(`value-hue`).textContent = options.hue_gradient.values[value].hue;
        document.getElementById(`slider-hue`).value = options.hue_gradient.values[value].hue;*/
        document.body.classList.add('using-hue-gradient');
    }

    // determine --ovr value based on --hue & --lit
    if (item == 'hue' || item == 'lit' || item == 'hue_gradient') {
        if (bleh.hue > 228 && bleh.hue < 252 && bleh.lit < 0.75) {
            bleh.ovr = 'var(--ov-c1)';
        } else if (bleh.hue > 210 && bleh.hue < 280 && bleh.lit < 0.425) {
            bleh.ovr = 'var(--ov-c1)';
        } else if (bleh.lit < 0.3) {
            bleh.ovr = 'var(--ov-c1)';
        } else {
            bleh.ovr = 'var(--b7)';
        }

        document.documentElement.style.setProperty(`--ovr`,bleh.ovr);
    }

    // remove gradient
    if (item == 'hue' || item == 'lit' || item == 'sat') {
        delete(bleh.hue_gradient);
        document.documentElement.style.removeProperty(`--hue-gradient`);
        document.body.classList.remove('using-hue-gradient');
    }

    if (options[item].type == 'slider' && !dont_modify) {
        // text to show current slider value
        try {
            document.getElementById(`value-${item}`).textContent = `${bleh[item]}${options[item].unit}`;
            document.getElementById(`slider-${item}`).value = bleh[item];

            if (bleh[item] != options[item].value)
                document.getElementById(`container-${item}`).classList.add('modified');
            else
                document.getElementById(`container-${item}`).classList.remove('modified');
        } catch(e) {}
    } else if (options[item].type == 'toggle' && !dont_modify) {
        if (bleh[item] == options[item].values[0]) {
            bleh[item] = options[item].values[1];
            document.getElementById(`toggle-${item}`).setAttribute('aria-checked',false);


            if (item == 'nav') {
                document.getElementById('nav-img').setAttribute('src','/img/nav-hidden.png');
                bleh.auth_badge = options.auth_badge.values[1];
            } else if (item == 'gendered_tags') {
                document.getElementById('gendered_tags-img').setAttribute('src','/img/gendered_tags-shown.png');
            }
        } else {
            bleh[item] = options[item].values[0];
            document.getElementById(`toggle-${item}`).setAttribute('aria-checked',true);


            if (item == 'nav') {
                document.getElementById('nav-img').setAttribute('src','/img/nav-shown.png');
                bleh.auth_badge = options.auth_badge.values[0];
            } else if (item == 'gendered_tags') {
                document.getElementById('gendered_tags-img').setAttribute('src','/img/gendered_tags-hidden.png');
            }
        }
    }

    // set variable on <htmL> aka. :root level
    if (item != 'hue_gradient')
        document.documentElement.style.setProperty(`--${options[item].css.replace('new-','')}`,`${bleh[item]}${options[item].unit}`);


    update_copy_block();
}

new ClipboardJS('.btn');
function update_copy_block() {
    let text = '';
    for (let item in bleh)
        text = `${text}--${options[item].css}: ${bleh[item]}${options[item].unit};<br>`;

    document.getElementById('copy-block').innerHTML = text;
}

function code_has_copied() {
    user_saved_settings = true;
    document.body.setAttribute('data-is-saved',user_saved_settings);
    window.removeEventListener('beforeunload', leaving_prompt);
}





// version checking & welcome prompt
let bleh_ver = parseFloat(getComputedStyle(document.body).getPropertyValue('--bleh2-ver'));
console.log('Theme is reporting', bleh_ver);

if (bleh_ver < 2024.0429 || isNaN(bleh_ver)) {
    create_window('Out of date!',`
    <p>Due to recent changes, the theme customiser requires<br>version <strong>2024.0429</strong>, which you do not have.</p>
    <br>
    <p>Don't worry, updating is easy.</p>
    `,[
    {
            'text': 'Done',
            'onclick': 'try_again()'
        },
        {
            'text': 'Update',
            'link': 'https://github.com/katelyynn/bleh/raw/uwu/lastfm-bleh2.user.css',
            'type': 'primary'
        }
    ],'welcome_bleh2_customise');
} else {
    /*create_window('Welcome to the theme customiser!',`
    <p>Have a scroll through and configure to your liking, then <strong>hit the confirm button once you're ready to save</strong>.</p>
    `,[
        {
            'text': 'Continue',
            'onclick': 'kill_windows()'
        }
    ],'welcome_bleh2_customise');*/
}

function try_again() {
    location.reload();
}





// create a custom colour
function open_manual_colours_prompt() {
    create_window('Create a custom colour',`
    <p>Colours are controlled by three values: hue, saturation, and lightness. Try out the sliders to get a feel.</p>
    <br>
    <div class="inner-preview pad">
        <div class="pallete">
            <div style="--col: hsl(var(--l2-c))"></div>
            <div style="--col: hsl(var(--l3-c))"></div>
            <div style="--col: hsl(var(--l4-c))"></div>
            <div style="--col: hsl(var(--l2))"></div>
            <div style="--col: hsl(var(--l3))"></div>
            <div style="--col: hsl(var(--l4))"></div>
        </div>
        <div class="sep"></div>
        <div class="btn-row">
            <button class="btn">Example button</button>
            <button class="btn primary">Example button</button>
            <div class="chartlist-bar">
                <span class="fill"></span>
                <span class="text">44,551 plays</span>
            </div>
        </div>
    </div>
    <br>
    <div class="slider-container dim-using-hue-gradient" id="container-hue">
        <button class="btn reset" onclick="reset_item('hue')">Reset to default</button>
        <div class="heading">
            <h5>Accent colour</h5>
        </div>
        <div class="slider">
            <input type="range" min="0" max="360" value="${bleh.hue}" id="slider-hue" oninput="update_item('hue', this.value)">
            <p id="value-hue">${bleh.hue}${options.hue.unit}</p>
        </div>
        <div class="hint">
            <p style="left: 0">0</p>
            <p style="left: calc((255 / 360) * 100%)">255</p>
            <p style="left: 100%">360</p>
        </div>
    </div>
    <div class="slider-container dim-using-hue-gradient" id="container-sat">
        <button class="btn reset" onclick="reset_item('sat')">Reset to default</button>
        <div class="heading">
            <h5>Saturation</h5>
        </div>
        <div class="slider">
            <input type="range" min="0" max="1.5" value="${bleh.sat}" step="0.025" id="slider-sat" oninput="update_item('sat', this.value)">
            <p id="value-sat">${bleh.sat}${options.sat.unit}</p>
        </div>
        <div class="hint">
            <p style="left: 0">0</p>
            <p style="left: calc((1 / 1.5) * 100%)">1</p>
            <p style="left: 100%">1.5</p>
        </div>
    </div>
    <div class="slider-container dim-using-hue-gradient" id="container-lit">
        <button class="btn reset" onclick="reset_item('lit')">Reset to default</button>
        <div class="heading">
            <h5>Lightness</h5>
        </div>
        <div class="slider">
            <input type="range" min="0" max="1.5" value="${bleh.lit}" step="0.025" id="slider-lit" oninput="update_item('lit', this.value)">
            <p id="value-lit">${bleh.lit}${options.lit.unit}</p>
        </div>
        <div class="hint">
            <p style="left: 0">0</p>
            <p style="left: calc((1 / 1.5) * 100%)">1</p>
            <p style="left: 100%">1.5</p>
        </div>
    </div>
    `,[
        {
            'text': 'Done',
            'onclick': 'kill_windows()'
        }
    ],'create_colour');
}



// prompt before leaving
let leaving_prompt = (event) => {
    event.preventDefault();

    create_window('Wait!',`
    <p>Your settings have not been saved, are you sure you want to exit?</p>
    `,[
        {
            'text': 'Cancel',
            'type': 'primary',
            'onclick': 'kill_windows()'
        }
    ],'welcome_bleh2_customise');
};




// on start
for (let item in options)
    bleh[item] = options[item].value;
reset_all(true);