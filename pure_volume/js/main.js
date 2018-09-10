// JavaScript Document
(() => {
  console.log("Linked");

  //VARIABLE STACK
  let play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      mute = document.querySelector('.mute'),
      unmute = document.querySelector('.unmute'),
      bannerVid = document.querySelector('.bannerVid');


  //FUNCTIONS

  function pausePlay(){

    if (bannerVid.paused == true) {
    bannerVid.play();
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    }
    else {
    bannerVid.pause();
    pause.classList.add('hidden');
    play.classList.remove('hidden');
    }
  }

  function muted(){

    if (bannerVid.volume == 0.0) {
      bannerVid.volume = 1.0;
      mute.classList.add('hidden');
      unmute.classList.remove('hidden');
    }
    else {
      bannerVid.volume = 0.0;
      unmute.classList.add('hidden');
      mute.classList.remove('hidden');
    }
  }


  //EVENT HANDLING
  pause.addEventListener('click', pausePlay);
  play.addEventListener('click', pausePlay);
  unmute.addEventListener('click', muted);
  mute.addEventListener('click', muted);
})();
