// customise bleh :3


let options = {
    hue: {
        css: 'hue',
        unit: '',
        value: 255,
        type: 'slider'
    },
    sat: {
        css: 'sat',
        unit: '',
        value: 1,
        type: 'slider'
    },
    lit: {
        css: 'lit',
        unit: '',
        value: 1,
        type: 'slider'
    },
    ovr: {
        css: 'ovr',
        unit: '',
        value: 'var(--b7)',
        type: null
    },
    gloss: {
        css: 'gloss-opacity',
        unit: '',
        value: 0.2,
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
    }
}

let bleh = {};


function reset_all(dont_modify=false) {
    for (let item in options)
        reset_item(item, dont_modify);
}

function reset_item(item, dont_modify=false) {
    update_item(item, options[item].value, dont_modify);
}

function update_item(item, value=undefined, dont_modify=false) {
    console.log(item,value,bleh[item],options[item]);
    if (options[item].type == 'slider')
        bleh[item] = value;

    // determine --ovr value based on --hue & --lit
    if (options[item].item == 'hue' || options[item].item == 'lit') {
        if (bleh.hue > 228 && bleh.hue < 252 && bleh.lit < 0.75) {
            bleh.ovr = 'var(--ov-c1)';
        } else if (bleh.hue > 210 && bleh.hue < 280 && bleh.lit < 0.425) {
            bleh.ovr = 'var(--ov-c1)';
        } else if (bleh.lit < 0.3) {
            bleh.ovr = 'var(--ov-c1)';
        } else {
            bleh.ovr = 'var(--b7)';
        }
    }

    if (options[item].type == 'slider' && !dont_modify) {
        // text to show current slider value
        document.getElementById(`value-${item}`).textContent = `${bleh[item]}${options[item].unit}`;
        document.getElementById(`slider-${item}`).value = bleh[item];
    } else if (options[item].type == 'toggle' && !dont_modify) {
        if (bleh[item] = options[item].values[0]) {
            bleh[item] = options[item].values[1];
            document.getElementById(`toggle-${item}`).setAttribute('aria-checked',false);


            if (item == 'nav') {
                document.getElementById('nav-img').setAttribute('src','/img/nav-hidden.png');
                bleh.auth_badge = options.auth_badge.values[1];
            }
        } else {
            bleh[item] = options[item].values[0];
            document.getElementById(`toggle-${item}`).setAttribute('aria-checked',true);


            if (item == 'nav') {
                document.getElementById('nav-img').setAttribute('src','/img/nav-shown.png');
                bleh.auth_badge = options.auth_badge.values[0];
            }
        }
    }

    // set variable on <htmL> aka. :root level
    document.documentElement.style.setProperty(`--${options[item].css}`,`${bleh[item]}${options[item].unit}`);


    update_copy_block();
}

function update_copy_block() {
    let text = '';
    for (let item in bleh)
        text = `${text}--${options[item].css}: ${options[item].value}${options[item].unit}<br>`;

    document.getElementById('copy-block').innerHTML = text;
}




// on start
for (let item in options)
    bleh[item] = options[item].value;
reset_all(true);