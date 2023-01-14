import TitleCard from "./titleCard.js"
import "./index.css"
import Taskbar from "./taskbar.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Schedule from "./schedule.js"
 
function App() {
  const bodyStyle = {
    backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
    backgroundColor: "#128ab7",
  }
  return (
    <div style={bodyStyle}>
      <BrowserRouter>
        <Taskbar />
        <Routes>
          <Route exact path="/" element={<TitleCard id="mainDiv"/>}></Route>
          <Route exact path="/schedule" element={<Schedule />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
