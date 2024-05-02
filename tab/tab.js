// tab


let search_type = 'web-search';
let time_of_day = 'morning';


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


function update_time() {
    let date = new Date();

    // time of day
    let date_hours = date.getHours();
    if      (date_hours < 6)  time_of_day = 'night';
    else if (date_hours < 12) time_of_day = 'morning';
    else if (date_hours < 18) time_of_day = 'afternoon';
    else                      time_of_day = 'evening';

    document.documentElement.setAttribute('time-of-day',time_of_day);
    document.getElementById('time-of-day').textContent = time_of_day;
}

// interval
window.setInterval(update_time, 50);