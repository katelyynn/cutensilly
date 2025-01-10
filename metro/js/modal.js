load_modals();

function load_modals() {
    let modals = document.createElement('div');
    modals.classList.add('modals');

    page.structure.modals = modals;
    page.state.modals = [];

    document.body.appendChild(modals);
}

function modal({
    id = null,
    title = null,
    body = null
}) {
    if (!id) {
        log('specify an id', 'modal');
        return;
    }

    let dialog = document.createElement('div');
    dialog.classList.add('modal');
    dialog.innerHTML = (`
        <div class="modal-inner">
            <h1 class="modal-header">${title}</h1>
            <div class="modal-body">${body}</div>
        </div>
    `);

    page.structure.modals.appendChild(dialog);
    page.state.modals[id] = {
        instance: dialog
    };

    log(`created ${id}`, 'modal', 'info', {
        id: id,
        title: title,
        body: body,
        instance: dialog
    });
    page.structure.modals.setAttribute('data-has-modal', 'true');
}

function modal_rm({
    id = null
}) {
    if (!id) {
        log('specify an id', 'modal');
        return;
    }

    if (page.state.modals[id]) {
        page.structure.modals.removeChild(page.state.modals[id].instance);
        delete page.state.modals[id];
    }

    log(`killed ${id}`, 'modal');
    page.structure.modals.setAttribute('data-has-modal', 'false');
}


function explode() {
    modal({
        id: 'hai',
        title: 'How will this person EXPLODE?',
        body: (`
            <p>Erm...... not sure</p>
            <input type="text" placeholder="place their name here cutely">
            <button class="mimic-link">oh.. do this instead oops</button>
            <p>That's all we need from you for now!</p>
            <div class="modal-fill"></div>
            <div class="modal-buttons">
                <button class="metro-button primary">
                    <span class="button-text">Next</span>
                </button>
                <button class="metro-button" onclick="modal_rm({id: 'hai'})">
                    <span class="button-text">Cancel</span>
                </button>
            </div>
        `)
    });
}