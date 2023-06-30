const hour = document.querySelector(".hrs");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const text = document.querySelector(".txt");

function clockTime(){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var txt = "AM";
  if(hrs>12){
    txt="PM"
  }

  hrs = hrs<10?"0"+hrs : hrs;
  min = min<10?"0"+min : min;
  sec = sec<10?"0"+sec : sec;

  hour.innerHTML = hrs;
  minute.innerHTML = min;
  second.innerHTML = sec;
  text.innerHTML = txt;
 }

clockTime();
setInterval(clockTime,1000);