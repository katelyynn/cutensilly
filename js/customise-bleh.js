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

    if (dont_modify) delete(bleh.hue_gradient);

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
    }

    // remove gradient
    if (item == 'hue' || item == 'lit' || item == 'sat') {
        delete(bleh.hue_gradient);
        document.documentElement.style.removeProperty(`--hue-gradient`);
        document.body.classList.remove('using-hue-gradient');
    }

    if (options[item].type == 'slider' && !dont_modify) {
        // text to show current slider value
        document.getElementById(`value-${item}`).textContent = `${bleh[item]}${options[item].unit}`;
        document.getElementById(`slider-${item}`).value = bleh[item];
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
        document.documentElement.style.setProperty(`--${options[item].css}`,`${bleh[item]}${options[item].unit}`);


    update_copy_block();
}

new ClipboardJS('.btn');
function update_copy_block() {
    let text = '';
    for (let item in bleh)
        text = `${text}--${options[item].css}: ${bleh[item]}${options[item].unit};<br>`;

    document.getElementById('copy-block').innerHTML = text;
}




// on start
for (let item in options)
    bleh[item] = options[item].value;
reset_all(true);