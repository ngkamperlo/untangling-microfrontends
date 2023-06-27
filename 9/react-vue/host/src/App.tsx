import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VueMFE from "./components/VueMFE";

// @ts-ignore
const ReactMFE = React.lazy(() => import("reactmfe/ReactMFE"));
// @ts-ignore

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
                <Link to="/vuemfe">Vue</Link>
              </li>
            </ul>
          </nav>

          <React.Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<ReactMFE />} />
              <Route path="/reactmfe" element={<ReactMFE />} />
              <Route path="/vuemfe" element={<VueMFE />} />
            </Routes>
          </React.Suspense>
        </>
      </div>
    </Router>
  );
}

export default App;
