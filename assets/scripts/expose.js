// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const img = document.querySelector('img');
  const audio = document.querySelector('audio');
  const hornSelect = document.getElementById('horn-select');

  //upadte image and audio
  hornSelect.addEventListener('change', function() {
    let horn = hornSelect.value;
    img.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  const volumeIcon = document.getElementById('volume-controls').querySelector('img');
  const volumeSlider = document.getElementById('volume');

  //volume slider set volume 
  volumeSlider.addEventListener('input', function() {
    let volume = volumeSlider.value;
    audio.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  const playButton = document.querySelector('button');
  //audio play
  playButton.addEventListener('click', function() {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });  
}