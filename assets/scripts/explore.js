// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Load voices into the dropdown
  let voices = [];
  let synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  function populateVoices() {
    voices = synth.getVoices();
    for (let voice of voices) {
      let option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('value', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  // Speak the text
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const image = document.querySelector('img');
  function speak() {
    if (textToSpeak.value !== '') {
      let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
      utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
      utterance.onstart = () => {
        image.src = 'assets/images/smiling-open.png'; 
      };
      utterance.onend = () => {
        image.src = 'assets/images/smiling.png'; 
      };
      synth.speak(utterance);
    }
  }

  button.addEventListener('click', speak);
}