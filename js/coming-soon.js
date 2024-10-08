let hours = 1000;
let minutes = 0;
let seconds = 0;
let interval = setInterval(() => {
  console.log(`Current state: ${hours}:${minutes}:${seconds}`);
  if (seconds === 0) {
    if (minutes === 0) {
      if (hours === 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Time's up!";
      } else {
        hours--;
        minutes = 59;
        seconds = 59;
      }
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  document.getElementById("timer").innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  console.log(`Updated state: ${hours}:${minutes}:${seconds}`);
}, 1000);