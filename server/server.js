const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.json("Hello World")
})
 
app.listen(1001, () => { console.log("Server started on port 1001") })


var wakeUpAlarmTimes = [[7,00],[7,00],[7,00],[7,00],[7,00],[7,00],[10,00],[10,00]]
setInterval(() => {
    var date = new Date();
    let day = date.getDay()
    if(date.getHours() == wakeUpAlarmTimes[day][0] && date.getMinutes() == wakeUpAlarmTimes[day][1]) {
        playWakeUpAlarm()
    }
}, 60000);
async function playWakeUpAlarm() {
    let {playAudioFile} = await import('audic');
    await playAudioFile('./audio files/let-the-day-begin--the-call.wav');
  }