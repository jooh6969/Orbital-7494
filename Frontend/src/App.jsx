import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import RealityModeScenario from "./pages/RealityModeScenario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/reality-mode" element={<RealityModeScenario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
