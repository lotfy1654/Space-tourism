import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Mars from "./Components/Destination/Mars";
import Europa from "./Components/Destination/Europa";
import Titan from "./Components/Destination/Titan";
import Crew from "./Pages/Crew";
import MarkCrew from "./Components/Crew/Mark";
import VictorCrew from "./Components/Crew/Victor";
import AnoushenCrew from "./Components/Crew/Anoushen";
import Technology from "./Pages/Technology";
import Spaceport from "./Components/Technology/Spaceport";
import Space from "./Components/Technology/Space";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination-2" element={<Mars />} />
          <Route path="/destination-3" element={<Europa />} />
          <Route path="/destination-4" element={<Titan />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew-2" element={<MarkCrew />} />
          <Route path="/crew-3" element={<VictorCrew />} />
          <Route path="/crew-4" element={<AnoushenCrew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology-2" element={<Spaceport />} />
          <Route path="/technology-3" element={<Space />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
