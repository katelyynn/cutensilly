// fm


let key;
let api = false;


function get_key() {
    key = localStorage.getItem('fm_key') || '';
    if (key != '') api = true;
}


function request_tracks() {
    let tracks = localStorage.getItem('fm_tracks') || '';

    if (tracks != '')
        load_tracks(JSON.parse(tracks));
    else
        request_new_tracks();
}

function request_new_tracks() {
    let xhr = new XMLHttpRequest();
    let url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cutensilly&format=json&limit=1&api_key=' + key;
    xhr.open('GET',url,true);

    xhr.onload = function() {
        load_tracks(JSON.parse(this.response));

        let api_expire = new Date();
        api_expire.getSeconds(api_expire.getSeconds() + 20);
        localStorage.setItem('fm_expire',api_expire);
        localStorage.setItem('fm_tracks',this.response);
    }

    xhr.send();
}


function load_tracks(data) {
    let tracks = data.recenttracks.track;
    console.log(tracks[0]);

    // url
    document.getElementById('chartlist-title').href = tracks[0].url;
    document.getElementById('chartlist-artist').href = 'https://www.last.fm/music/' + tracks[0].artist['#text'];
    document.getElementById('chartlist-img-link').href = 'https://www.last.fm/music/' + tracks[0].artist['#text'] + '/' + tracks[0].album['#text'];

    // now playing
    try {
        if (tracks[0]['@attr'].nowplaying == 'true') {
            document.getElementById('chartlist-row').setAttribute('nowplaying','true');
            document.getElementById('chartlist-time').textContent = 'Scrobbling now';
        }
    }
    catch(e) {
        document.getElementById('chartlist-row').setAttribute('nowplaying','false');
        document.getElementById('chartlist-time').textContent = tracks[0].date['#text'];
    }

    // cover
    document.getElementById('chartlist-img').src = tracks[0].image[2]['#text'];
    document.getElementById('bg').style.setProperty('background-image',`url(${tracks[0].image[3]['#text']})`);

    // info
    //document.getElementById('music').setAttribute('track',tracks[0].name);
    //document.getElementById('music').setAttribute('artist',tracks[0].artist['#text']);
    //document.getElementById('music').setAttribute('album',tracks[0].album['#text']);

    // track
    document.getElementById('chartlist-title').textContent = tracks[0].name;

    // artist
    document.getElementById('chartlist-artist').textContent = tracks[0].artist['#text'];
}


// loop
setTimeout(function() {
    //console.log('loaded');
    get_key();

    if (api) {
        request_tracks();
        setInterval(request_tracks,3000);
    }
},100);