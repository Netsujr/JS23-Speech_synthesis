const msg = new SpeechSynthesisUtterance(); //the api
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// create the voices array
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');

}
