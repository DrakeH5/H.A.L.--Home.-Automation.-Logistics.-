import TitleCard from "./titleCard.js"
import "./index.css"
import Taskbar from "./taskbar.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const bodyStyle = {
    backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
    backgroundColor: "#128ab7",
  }
  return (
    <div style={bodyStyle}>
      <BrowserRouter>
        <Taskbar />
      </BrowserRouter>
      <TitleCard id="mainDiv"/>
    </div>
  );
}

export default App;
