// Get the audio, mute button, and volume icon elements
const audio = document.getElementById('background-audio');
const muteButton = document.getElementById('mute-button');
const volumeIcon = document.getElementById('volume-icon');

// Play the audio automatically after a short delay
setTimeout(() => {
    audio.play();
  }, 1000); // 1000ms = 1s

// Define the storage keys for volume and mute state
const volumeStorageKey = 'audioVolume';
const muteStorageKey = 'isMuted';

// Initialize the volume and mute state from local storage
let isMuted = localStorage.getItem(muteStorageKey) === 'true';
let volume = localStorage.getItem(volumeStorageKey);

// Set the default volume if it's not stored in local storage
if (volume === null) {
  volume = 0.1; // Default volume
} else {
  volume = parseFloat(volume);
}

// Set the audio volume and mute state
audio.volume = volume;
audio.muted = isMuted;

// Update the volume icon based on the mute state
volumeIcon.classList.toggle('fa-volume-mute', isMuted);
volumeIcon.classList.toggle('fa-volume-up', !isMuted);

// Add an event listener to the mute button
muteButton.addEventListener('click', () => {
  // Toggle the mute state
  isMuted = !isMuted;
  audio.muted = isMuted;

  // Update the volume icon
  volumeIcon.classList.toggle('fa-volume-mute', isMuted);
  volumeIcon.classList.toggle('fa-volume-up', !isMuted);

  // Store the new mute state in local storage
  localStorage.setItem(muteStorageKey, isMuted.toString());
});

// Add an event listener to the audio element for volume changes
audio.addEventListener('volumechange', () => {
  // Store the new volume in local storage
  localStorage.setItem(volumeStorageKey, audio.volume.toString());
});

// Wait for user interaction before playing the audio
document.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    console.log('Audio is playing');
  } else {
    console.log('Audio is already playing');
  }
});

// Set the initial volume
audio.volume = 0.1;
console.log('Volume is set to 0.2');