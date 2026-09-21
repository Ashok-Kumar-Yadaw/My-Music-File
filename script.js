const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

// गानों की लिस्ट
const songs = [
    { name: 'SoundHelix-Song-1', displayName: 'म्यूजिक ट्रैक 1', artist: 'कलाकार 1' },
    { name: 'SoundHelix-Song-2', displayName: 'म्यूजिक ट्रैक 2', artist: 'कलाकार 2' }
];

let songIndex = 0;
let isPlaying = false;

// गाना लोड करने का फंक्शन
function loadSong(song) {
    title.innerText = song.displayName;
    artist.innerText = song.artist;
    audio.src = `https://soundhelix.com{song.name}.mp3`;
}

// प्ले और पॉज़ फंक्शन
function playSong() {
    isPlaying = true;
    playBtn.innerText = '⏸ Pause';
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.innerText = '▶ Play';
    audio.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// पिछला और अगला गाना बदलने के लिए
function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// शुरुआत में पहला गाना लोड करें
loadSong(songs[songIndex]);
