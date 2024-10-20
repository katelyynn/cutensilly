// tab


let search_type = 'web-search';
let time_of_day = 'morning';
let special_entry = false;


let search_types = {
    'web-search': {
        pre: 'https://duckduckgo.com/?q=',
        code: ''
    },
    'direct-url': {
        pre: 'https://',
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

let special_entries = {
    'youtube': 'https://youtube.com',
    'twitch': 'https://twitch.tv/directory/following',
    'lastfm': 'https://last.fm',
    'github': 'https://github.com',
    'rym': 'https://rateyourmusic.com',
    'rain': 'https://mynoise.net/NoiseMachines/thunderNoiseGenerator.php',
    'pinterest': 'https://pinterest.co.uk',
    'genius': 'https://genius.com',
    'music': 'https://music.apple.com/gb',
    'spotify': 'https://open.spotify.com'
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

    if (value in special_entries) {
        special_entry = value;
        document.getElementById('search').setAttribute('data-special','true');
    } else {
        special_entry = false;
        document.getElementById('search').setAttribute('data-special','false');
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

    if (special_entry != false) {
        window.location.href = special_entries[special_entry];
    } else {
        window.location.href = search_types[search_type].pre + value.replace(search_types[search_type].code,'');
    }
}


function update_time() {
    let date = new Date();

    // time of day
    let date_hours = date.getHours();
    if      (date_hours > 21 || date_hours < 7)  time_of_day = 'night';
    else if (date_hours < 12)                    time_of_day = 'morning';
    else if (date_hours < 16)                    time_of_day = 'afternoon';
    else if (date_hours < 21)                    time_of_day = 'afternoon-later';
    else                                         time_of_day = 'evening';

    document.documentElement.setAttribute('time-of-day',time_of_day);
    document.getElementById('time-of-day').textContent = time_of_day.replace('-later','');
}

// interval
window.setInterval(update_time, 50);