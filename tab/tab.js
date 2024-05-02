// tab


let search_type = 'web-search';
let time_of_day = 'morning';


let search_types = {
    'web-search': {
        pre: 'https://duckduckgo.com/?q=',
        code: ''
    },
    'direct-url': {
        pre: '',
        code: '?'
    },
    'lastfm': {
        pre: 'https://www.last.fm/search?q=',
        code: '/'
    },
    'youtube': {
        pre: 'https://www.youtube.com/results?search_query=',
        code: '>'
    }
}


function update_query(value) {
    let starting_val = value[0];

    if (starting_val == '?') {
        update_search_type('direct-url');
    } else if (starting_val == '/') {
        update_search_type('lastfm');
    } else if (starting_val == '>') {
        update_search_type('youtube');
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


document.getElementById('search-input').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        send_result(document.getElementById('search').value);
    }
});


function send_result(value) {
    if (value == '' || value == '?' || value == '/') return;

    window.location.href = search_types[search_type].pre + value.replace(search_types[search_type].code,'');
}


function update_time() {
    let date = new Date();

    // time of day
    let date_hours = date.getHours();
    if      (date_hours < 7)  time_of_day = 'night';
    else if (date_hours < 12) time_of_day = 'morning';
    else if (date_hours < 16) time_of_day = 'afternoon';
    else if (date_hours < 23) time_of_day = 'afternoon-later';
    else                      time_of_day = 'evening';

    document.documentElement.setAttribute('time-of-day',time_of_day);
    document.getElementById('time-of-day').textContent = time_of_day.replace('-later','');
}

// interval
window.setInterval(update_time, 50);