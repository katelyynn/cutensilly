// cutensilly api
// with help from 2lay


let last_used_track = {};
let is_requesting = false;
let is_requesting_info = false;

function request_tracks() {
    let tracks = localStorage.getItem('fm_tracks') || '';

    if (new Date(localStorage.getItem('fm_expire')) > new Date())
        load_tracks(JSON.parse(tracks));
    else if (!is_requesting)
        request_new_tracks();
}

function request_new_tracks() {
    console.log('requesting new');
    is_requesting = true;

    let xhr = new XMLHttpRequest();
    let url = 'https://api.katelyn.moe/fm';
    xhr.open('GET',url,true);

    xhr.onload = function() {
        load_tracks(JSON.parse(this.response));

        let api_expire = new Date();
        api_expire.setSeconds(api_expire.getSeconds() + 8);
        localStorage.setItem('fm_expire',api_expire);
        localStorage.setItem('fm_tracks',this.response);
        is_requesting = false;
    }

    xhr.send();
}

function load_tracks(data) {
    console.log(data);

    // missing album cover, last.fm bug
    // only fix is to make a new request
    /*if (data.covers.medium.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) {
        setTimeout(function() {request_new_tracks()}, 500);
        return;
    }*/

    if (JSON.stringify(data) != JSON.stringify(last_used_track)) {
        // url
        document.getElementById('chartlist-title').href = 'https://www.last.fm/music/' + data.artist + '/_/' + data.track;
        document.getElementById('chartlist-artist').href = 'https://www.last.fm/music/' + data.artist;
        document.getElementById('chartlist-img-link').href = 'https://www.last.fm/music/' +data.artist + '/' + data.album;

        // now playing
        if (data.realtime == 'true') {
            document.getElementById('chartlist-row').setAttribute('nowplaying','true');
            document.getElementById('chartlist-time').textContent = '';
        } else {
            document.getElementById('chartlist-row').setAttribute('nowplaying','false');
            document.getElementById('chartlist-time').textContent = parse_date(data.timestamp);
        }

        // cover
        if (!data.covers.medium.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) {
            document.getElementById('chartlist-img').src = data.covers.medium;
            document.getElementById('bg').style.setProperty('background-image',`url(${data.covers.extra_large})`);
        }

        // info
        //document.getElementById('music').setAttribute('track',tracks[0].name);
        //document.getElementById('music').setAttribute('artist',tracks[0].artist['#text']);
        //document.getElementById('music').setAttribute('album',tracks[0].album['#text']);

        // track
        document.getElementById('chartlist-title').textContent = data.track;

        // artist
        document.getElementById('chartlist-artist').textContent = data.artist;

        last_used_track = data;
    }
}


function request_info() {
    let info = localStorage.getItem('fm_info') || '';

    if (new Date(localStorage.getItem('fm_info_expire')) > new Date())
        load_info(JSON.parse(info));
    else if (!is_requesting_info)
        request_new_info();
}

function request_new_info() {
    console.log('requesting new info');
    is_requesting_info = true;

    let xhr = new XMLHttpRequest();
    let url = 'https://api.katelyn.moe/fm/user/cutensilly';
    xhr.open('GET',url,true);

    xhr.onload = function() {
        load_info(JSON.parse(this.response));

        let api_info_expire = new Date();
        api_info_expire.setHours(api_info_expire.getHours() + 2);
        localStorage.setItem('fm_info_expire',api_info_expire);
        localStorage.setItem('fm_info',this.response);
        is_requesting_info = false;
    }

    xhr.send();
}

function load_info(data) {
    document.getElementById('avatar').setAttribute('src',data.covers.extra_large);
    document.getElementById('favi').href = data.covers.extra_large;
}


function parse_date(new_date) {
    return moment.unix(new_date).fromNow();
}


// loop
setTimeout(function() {
    try {
        load_tracks(JSON.parse(localStorage.getItem('fm_tracks') || ''));
        load_info(JSON.parse(localStorage.getItem('fm_info') || ''));
    } catch(e) {}

    request_info();
    setInterval(request_tracks, 5000);
},100);