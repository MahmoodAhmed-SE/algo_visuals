import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DfsContent from "./algorithms/dfs/DfsContent";
import BfsContent from "./algorithms/bfs/BfsContent";

function App() {
  return (
    <Router>
      <nav className="navbar fixed-top bg-light">
        <div className="container-fluid justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/DFS" className="nav-link">
                Depth-First Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/BFS" className="nav-link">
                Depth-First Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/DFS" element={<DfsContent />}></Route>
          <Route path="/BFS" element={<BfsContent />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
