// tab


let search_type = 'web-search';


function update_query(value) {
    let starting_val = value[0];

    if (starting_val == '?') {
        update_search_type('direct-url');
    } else if (starting_val == '/') {
        update_search_type('lastfm');
    } else {
        update_search_type('web-search');
    }
}


function update_search_type(new_type) {
    if (search_type != new_type) {
        search_type = new_type;
        document.getElementById('search-input').setAttribute('data-search',new_type);
    }
}