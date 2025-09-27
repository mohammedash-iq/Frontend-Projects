const canvas = document.getElementById("canvas");
const can = canvas.getContext("2d");
function clockload() {
  drawclock();
  date = new Date();
  sethands(date.getSeconds(), -170, 3, "red", 60);
  sethands(date.getMinutes() + date.getSeconds() / 60, -140, 6, "black", 60);
  sethands(
    date.getMinutes() / 60 + (date.getHours() % 12 || 12),
    -90,
    9,
    "black",
    12
  );
}
function sethands(time, len, wid, color, div) {
  can.beginPath();
  can.moveTo(250, 250);
  can.lineWidth = wid;
  can.strokeStyle = color;
  can.lineTo(
    250 + len * Math.sin(time * ((2 * Math.PI) / div)),
    250 + len * -Math.cos(time * ((2 * Math.PI) / div))
  );
  can.stroke();
}
function drawclock() {
  can.clearRect(0, 0, 500, 500);
  can.beginPath();
  can.lineWidth = 5;
  can.lineCap = "round";
  can.strokeStyle = "blue";
  can.arc(250, 250, 200, 0, 2 * Math.PI);
  can.stroke();
  can.font = "15px Arial";
  for (i = 0; i <= 12; i++) {
    if (i == 0) continue;
    can.fillText(
      i,
      250 + 180 * Math.sin(i * ((2 * Math.PI) / 12)),
      250 + 180 * -Math.cos(i * ((2 * Math.PI) / 12))
    );
  }
}
setInterval(() => {
  clockload();
}, 1000);
