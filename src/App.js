import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./input.css";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Current from "./pages/Current";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all/:name" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/current" element={<Current />} />
        <Route path="/upcoming" element={<Upcoming />} />
        {/* <Route path="/sign" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
