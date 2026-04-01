import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Journal from "./pages/Journal";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Showcase</Link> |{" "}
        <Link to="/journal">Updates </Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="*" element={<h1>Uh oh! This page doesn't exist!</h1>} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
