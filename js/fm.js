// cutensilly api
// with help from 2lay


let last_used_track = {};

function request_tracks() {
    let tracks = localStorage.getItem('fm_tracks') || '';

    if (new Date(localStorage.getItem('fm_expire')) > new Date())
        load_tracks(JSON.parse(tracks));
    else
        request_new_tracks();
}

function request_new_tracks() {
    console.log('requesting new');
    let xhr = new XMLHttpRequest();
    let url = 'https://api.cutensilly.org/fm';
    xhr.open('GET',url,true);

    xhr.onload = function() {
        load_tracks(JSON.parse(this.response));

        let api_expire = new Date();
        api_expire.setSeconds(api_expire.getSeconds() + 6);
        localStorage.setItem('fm_expire',api_expire);
        localStorage.setItem('fm_tracks',this.response);
    }

    xhr.send();
}


function load_tracks(data) {
    console.log(data);

    // missing album cover, last.fm bug
    // only fix is to make a new request
    if (data.covers.medium.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) {
        setTimeout(function() {request_new_tracks()}, 500);
        return;
    }

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
        document.getElementById('chartlist-img').src = data.covers.medium;
        document.getElementById('bg').style.setProperty('background-image',`url(${data.covers.extra_large})`);

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


function parse_date(new_date) {
    return moment.unix(new_date).fromNow();
}


// loop
setTimeout(function() {
    request_tracks();
    setInterval(request_tracks,1000);
},100);