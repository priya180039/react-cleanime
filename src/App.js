import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./input.css";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Current from "./pages/Current";
import Upcoming from "./pages/Upcoming";
import AnimeDetail from "./pages/AnimeDetail";
import { StaticProvider } from "./features/StaticContext";

function App() {
  return (
    <StaticProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all/:name" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/current" element={<Current />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* <Route path="/sign" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </StaticProvider>
  );
}

export default App;
