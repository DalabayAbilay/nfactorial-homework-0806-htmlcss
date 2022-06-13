const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

const img = document.querySelector("img");
const music = document.querySelector("audio");

const songs = [
    {
        name: "lubite_devushki",
        title: "Lubite Devushki",
        artist: "Scrip",
    },
    {
        name: "baby_mama_audio",
        title: "Baby Mama",
        artist: "Scriptonite",
    },
    {
        name: "cepi",
        title: "Cepi",
        artist: "Sckrip Sckrip",
    }, 
]   

let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add();
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.add();
};

play.addEventListener('click', ()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "assets/" + songs.name + ".mp3";
    img.src = "assets/" + songs.name + "_img.jpg";
};

songIndex = 0;

// loadSong(songs[1]);  

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}

next.addEventListener("click", nextSong);
prev.addEventListener('click', prevSong);