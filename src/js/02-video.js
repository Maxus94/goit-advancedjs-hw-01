import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
