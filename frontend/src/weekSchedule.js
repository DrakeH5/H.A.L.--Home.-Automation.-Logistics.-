import EachDaySchedule from "./eachdaySchedule.js"
function WeekSchedule() {     
    var nbmOfDays = [];
    for(var i=1; i<8; i++){
        nbmOfDays.push(i)
    }  
    return(
        nbmOfDays.map((index) => {
            return <EachDaySchedule day={index} key={index} />
        })
    )
}

export default WeekSchedule;
