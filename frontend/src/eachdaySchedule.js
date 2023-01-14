import { useState, useEffect } from "react";

function EachDaySchedule(day) {
    var day = day["day"];
    var amountLeft = 200*day;
    const style = {
        position: "absolute",
        left: -window.innerWidth/2.5,
        transform: "translate(" + amountLeft + "%, 0)",
        width: "40%",
        height: window.innerHeight*0.4,
        backgroundColor: "white",
    }
    var [wakeUpTime, setWakeUpTime] = useState();
    useEffect(() => {
        fetch("/getWakeUpTimes").then(res => res.json()).then(
            data => {
                setWakeUpTime((wakeUpTime) => wakeUpTime = data[day][0] + ":" + data[day][1]);
            }
        )
    })
        return (
            <center style={style}>
                <h1 style={{backgroundColor: "lightblue"}}>{day}</h1>
                <h2 style={{backgroundColor: "red"}}>{wakeUpTime}</h2>
            </center>
        );
}

export default EachDaySchedule;
