// JavaScript Document
(() => {
  console.log("Linked");

  // VARIABLE STACK
  let play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      mute = document.querySelector('.mute'),
      unmute = document.querySelector('.unmute'),
      bannerVid = document.querySelector('.bannerVid'),
      desktopQ = window.matchMedia("(min-width: 1024px)");


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

    if (bannerVid.muted) {
      bannerVid.muted = false;
      mute.classList.remove('hidden');
      unmute.classList.add('hidden');
    }
    else {
      bannerVid.muted = true;
      unmute.classList.remove('hidden');
      mute.classList.add('hidden');
    }
  }

  function reassignImages(x) {
    if (x.matches) { // If media query matches
        document.getElementById('drake').src='images/desktop_images/drake.png';
        document.getElementById('gucci').src='images/desktop_images/gucci.png';
        document.getElementById('john').src='images/desktop_images/john.png';
        document.getElementById('niel').src='images/desktop_images/conan.png';
        document.getElementById('alicia').src='images/desktop_images/alicia.png';
        document.getElementById('star').src='images/desktop_images/star.png';
        document.getElementById('ryan').src='images/desktop_images/fail.png';
        document.getElementById('car').src='images/desktop_images/casper.png';
        document.getElementById('paul').src='images/desktop_images/paul.png';
        document.getElementById('pump').src='images/desktop_images/pump.png';
        document.getElementById('trippie').src='images/desktop_images/trippie.png';
        document.getElementById('tekashi').src='images/desktop_images/tekashi.png';
    } else {
        document.getElementById('drake').src='images/tablet_images/drake_tablet.png';
        document.getElementById('gucci').src='images/tablet_images/gucci_tablet.png';
        document.getElementById('john').src='images/tablet_images/john_tablet.png';
        document.getElementById('niel').src='images/tablet_images/niel_tablet.png';
        document.getElementById('alicia').src='images/tablet_images/alicia_tablet.png';
        document.getElementById('star').src='images/tablet_images/star_tablet.png';
        document.getElementById('ryan').src='images/tablet_images/ryan_tablet.png';
        document.getElementById('car').src='images/tablet_images/car_tablet.png';
        document.getElementById('paul').src='images/tablet_images/paul_tablet.png';
        document.getElementById('pump').src='images/tablet_images/pump_tablet.png';
        document.getElementById('trippie').src='images/tablet_images/trippie_tablet.png';
        document.getElementById('tekashi').src='images/tablet_images/tekashi_tablet.png';
    }
  }


function videoResize() {

if (window.matchMedia("(max-width: 768px)").matches) {
        // apply MOBILE VIDEO to bannerVid
        // bannerVid.src='/videos/pureVolume_mobile.mp4';
        console.log("changed video to MOBILE");
        
    } else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1024px)").matches) {
        // apply TABLET VIDEO to bannerVid
        // bannerVid.src='/videos/pureVolume_tablet.mp4';
        console.log("changed video to TABLET");

    } else if (window.matchMedia("(min-width: 1024px)").matches) {
        // apply DESKTOP VIDEO to bannerVid
        // bannerVid.src='/videos/pureVolume_desktop'
        console.log("changed video to DESKTOP");

    } else {
        // a fallback
        console.log("You do not have a screen!");
    }


 }


  // call FUNCTIONS
  reassignImages(desktopQ);

  // EVENT HANDLING
  pause.addEventListener('click', pausePlay);
  play.addEventListener('click', pausePlay);
  unmute.addEventListener('click', muted);
  mute.addEventListener('click', muted);
  desktopQ.addListener(reassignImages);
  window.addEventListener('resize', videoResize);

})();
