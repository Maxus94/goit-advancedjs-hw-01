import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';
const savedData = localStorage.getItem(STORAGE_TIME_KEY);

if (savedData) {
  player.setCurrentTime(savedData);
}

player.on(
  'timeupdate',
  throttle(function ({seconds}) {
    localStorage.setItem(STORAGE_TIME_KEY, seconds);
  }, 1000)
);
