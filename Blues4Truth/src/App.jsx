import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/topics";
import Profile from "./pages/minigames";
import Journal from "./pages/myprofile";
import Pong from "./pages/minigame pages/pong";
import Isolation from "./pages/topics/isolation/isolation";
import Burnout from "./pages/topics/burnout/burnout";
import Fatherhood from "./pages/topics/fatherhood/fatherhood";
import Homeicon from "./assets/home.png";
import Topicicon from "./assets/topics.png";
import Minigamesicon from "./assets/minigames.png";
import Profileicon from "./assets/profile.png";
function App() {
  return (
     <BrowserRouter basename="/Blues4Truth/">
      <nav>
        <Link to="/home">
          <img src={Homeicon} alt="Home" style={{ width: "30px", height: "30px" }} />
        </Link> {" "}

        <Link to="/topics">
          <img src={Topicicon} alt="Topics" style={{ width: "30px", height: "30px" }} />
        </Link> {" "}
        <Link to="/minigames">
          <img src={Minigamesicon} alt="Mini Games" style={{ width: "30px", height: "30px" }} />
        </Link> {" "}
        <Link to="/myprofile">
          <img src={Profileicon} alt="Profile" style={{ width: "30px", height: "30px" }} />
        </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/topics" element={<About />} />
        <Route path="/minigames" element={<Profile />} />
        <Route path="/myprofile" element={<Journal />} />
        <Route path="/pong" element={<Pong />} />
        <Route path="/isolation" element={<Isolation />} />
        <Route path="/burnout" element={<Burnout />} />
        <Route path="/fatherhood" element={<Fatherhood />} />
        <Route path="*" element={<h1>Uh oh! This page doesn't exist!</h1>} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
