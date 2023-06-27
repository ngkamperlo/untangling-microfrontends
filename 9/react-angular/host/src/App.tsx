import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AngularMFE from "./components/AngularMFE";

// @ts-ignore
const ReactMFE = React.lazy(() => import("reactmfe/ReactMFE"));

function App() {
  return (
    <Router>
      <div>
        <>
          <nav>
            <ul>
              <li>
                <Link to="/reactmfe">React</Link>
              </li>
              <li>
                <Link to="/angularmfe">Angular</Link>
              </li>
            </ul>
          </nav>

          <React.Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<ReactMFE />} />
              <Route path="/reactmfe" element={<ReactMFE />} />
              <Route path="/angularmfe" element={<AngularMFE />} />
            </Routes>
          </React.Suspense>
        </>
      </div>
    </Router>
  );
}

export default App;
