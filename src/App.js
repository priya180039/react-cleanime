import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./input.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
