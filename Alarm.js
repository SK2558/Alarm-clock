const alarmSubmit = document.getElementById("alarmSubmit");

alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio('lion.mp3');



function ringBell(){
    audio.play();         

}

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  const alarmDate = new Date(alarm.value);
  console.log(`setting alarm for ${alarmDate}...`);
  now = new Date();
  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("Ringing now");
      ringBell();
    }, timeToAlarm);
  }
}
