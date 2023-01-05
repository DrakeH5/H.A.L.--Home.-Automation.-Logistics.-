import TitleCard from "./titleCard.js"
import "./index.css"

function App() {
  const bodyStyle = {
    backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
    backgroundColor: "#128ab7",
  }
  return (
    <div style={bodyStyle}>
      <TitleCard id="mainDiv"/>
    </div>
  );
}

export default App;
