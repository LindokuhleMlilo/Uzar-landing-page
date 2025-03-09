import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lottery from "./pages/Lottery";
import Offramp from "./pages/Offramp";
import Polymarkets from "./pages/Polymarkets";
import "./index.css"; // Adjust if your CSS file is named differently

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Define routes for your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/offramp" element={<Offramp />} />
          <Route path="/polymarkets" element={<Polymarkets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;