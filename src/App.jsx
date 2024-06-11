import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BuildingDirectory from "./pages/BuildingDirectory.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route exact path="/building-directory" element={<BuildingDirectory />} />
      </Routes>
    </Router>
  );
}

export default App;
