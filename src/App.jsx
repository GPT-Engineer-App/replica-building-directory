import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BuildingDirectory from "./pages/BuildingDirectory.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BuildingDirectory />} />
        <Route path="/building-directory" element={<BuildingDirectory />} />
      </Routes>
    </Router>
  );
}

export default App;