import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./input.css";
import Home from "./pages/Home";
import All from "./pages/All";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/all/:name" element={<All />} />
        {/* <Route path="/sign" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
