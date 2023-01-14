import WeekSchedule from "./weekSchedule.js"
function Schedule() {
    const mainStyle = {
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, 0)",
    }
  return (
    <div style={mainStyle}>
        <h1 style={{color:"white"}}>ROUTINE SCHEDULE</h1>
        <WeekSchedule />
    </div>
  );
}

export default Schedule;
