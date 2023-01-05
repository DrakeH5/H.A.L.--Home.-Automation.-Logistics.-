function TitleCard() {
    const mainStyle = {
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, 0)",
        color: "#beba46",
        fontSize: "xx-large",
    }
    return (
      <div style={mainStyle}>
        <center><h1>H.A.L.</h1></center>
        <p>Home Automation Logistics</p>
      </div>
    );
  }
  
  export default TitleCard;
  