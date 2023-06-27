import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.component";
import Notification from "./components/Notification.component";
import { login } from "./api/authentication";

//@ts-ignore
const PizzaList = React.lazy(() => import("pizzalist/PizzaList"));
//@ts-ignore
const Basket = React.lazy(() => import("basket/Basket"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleLogin = async (username: string, password: string) => {
    const result = await login(username, password);
    setIsLoggedIn(result);

    if (result) {
      setNotification({ message: "Logged in successfully!", type: "success" });
    } else {
      setNotification({ message: "Failed to log in.", type: "error" });
    }
  };

  return (
    <Router>
      <div>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}

        {isLoggedIn ? (
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/pizzalist">Pizza List</Link>
                </li>
                <li>
                  <Link to="/basket">Basket</Link>
                </li>
              </ul>
            </nav>

            <React.Suspense fallback="Loading...">
              <Routes>
                <Route path="/" element={<PizzaList />} />
                <Route path="/pizzalist" element={<PizzaList />} />
                <Route path="/basket" element={<Basket />} />
              </Routes>
            </React.Suspense>
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
