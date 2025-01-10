page.state.charms = false;
page.state.charms_id = 'charms';

function charms(id = 'charms') {
    let charms_bar = page.structure.charms;
    if (!charms_bar)
        charms_bar = document.createElement('div');

    charms_bar.classList.add('charms');
    charms_bar.setAttribute('data-id', id);
    charms_bar.innerHTML = '';

    page.state.charms_id = id;

    if (id == 'charms') {

    } else if (id == 'start') {

    }

    document.body.appendChild(charms_bar);
    page.structure.charms = charms_bar;
}