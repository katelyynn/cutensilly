function create_form_window(title, text, fields, actions, id, icon = '') {
    let fieldset = document.createElement('fieldset');

    for (let field in fields) {
        let fld = fields[field];

        let em = document.createElement('div');
        em.classList.add('checkbox');

        em.innerHTML = (`
        <input type="radio" id="${fld.id}" value="${fld.id}" name="${id}">
        <label for="${fld.id}">${fld.text}</label>
        `);

        fieldset.appendChild(em);
    }

    create_window(title,`${text}<form>${fieldset.outerHTML}</form>`,actions,id,icon);
}