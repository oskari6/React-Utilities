import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Animations from "./pages/Animations";
import Animations2 from "./pages/Animations2";
import Animations3 from "./pages/Animations3";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import ParallaxScrollingEffects from "./pages/ParallaxScrollingEffects";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/animations2" element={<Animations2 />} />
        <Route path="/parallax" element={<ParallaxScrollingEffects />} />
        <Route path="/animations3" element={<Animations3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
