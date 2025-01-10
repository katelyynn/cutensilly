function log(text, system, type = 'info', append={}) {
    let system_colour;

    switch(system) {
        case 'load':
            system_colour = '#8CB9D9';
            break;
        case 'page':
            system_colour = '#E4B381';
            break;
        case 'page structure':
            system_colour = '#D88A69';
            break;
        default:
            system_colour = '#C8DD88';
            break;
    }

    if (Object.keys(append).length > 0)
        console[type](`%cmetro~%c${system}%c: ${text}`, 'color: #9F8CD9', `color: ${system_colour}; font-weight: bold`, 'color: unset', append);
    else
        console[type](`%cmetro~%c${system}%c: ${text}`, 'color: #9F8CD9', `color: ${system_colour}; font-weight: bold`, 'color: unset');
}