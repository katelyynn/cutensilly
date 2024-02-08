let username = 'katea';

let xhr = new XMLHttpRequest();
let url = `https://en.pronouns.page/api/profile/get/${username}?version=2`;
xhr.open('GET',url,true);

xhr.onload = function() {
    console.log(xhr.status);
    render_pronouns(JSON.parse(this.response));
}

xhr.send();


// render
function render_pronouns(data) {
    for (let i in data.profiles.en.names)
        document.getElementById('prn-names').appendChild(render_pronoun_text(data.profiles.en.names[i]));
    for (let i in data.profiles.en.pronouns)
        document.getElementById('prn-pronouns').appendChild(render_pronoun_text(data.profiles.en.pronouns[i]));

    for (let word in data.profiles.en.words)
        for (let i in data.profiles.en.words[word].values)
            document.getElementById(`prn-${data.profiles.en.words[word].header}`).appendChild(render_pronoun_text(data.profiles.en.words[word].values[i]));

    for (let i in data.profiles.en.flags)
        document.getElementById('prn-flags').appendChild(render_pronoun_flag(data.profiles.en.flags[i]));
}

function render_pronoun_text(context) {
    let em_text = document.createElement('p');
    em_text.classList.add('pronoun-text');
    em_text.setAttribute('data-opinion',context.opinion);
    em_text.innerHTML = (`
    <img src="/img/pronouns_${context.opinion}.png">${context.value}
    `);

    tippy(em_text, {
        content: `<i>${context.value}:</i> ${context.opinion}`,
        arrow: false,
        followCursor: true,
        animation: false,
        allowHTML: true
    });

    return em_text;
}

function render_pronoun_flag(context) {
    let em_text = document.createElement('p');
    em_text.classList.add('inset-footer','pronoun-flag');
    em_text.innerHTML = (`
    <img class="icon" src="/img/pronouns_flag_${context}.png">${context.toLowerCase()}
    `);

    return em_text;
}