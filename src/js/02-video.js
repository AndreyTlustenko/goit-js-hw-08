import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let Iframe = document.querySelector('iframe');
    let player = new Player(Iframe);

// player.on('play', function() {
//         console.log('played the video!');
//     });
// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
   
onPlay=throttle((data)=>{
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);
player.on("timeupdate",  onPlay);

player.on("loaded", function () {
    if (localStorage.getItem("videoplayer-current-time")) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    }
});