import "./App.css";

// importing the Pages and Header Component
import Header from "./components/header";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import RegiserUser from "./pages/registerUser";
import Dashboard from "./pages/dashboard";
import WeatherPage from "./pages/weatherPage";
import CurrencyExchangePage from "./pages/currencyExchangePage";

// Importing the Private Route and Routing components
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./services/privateRoutes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/register" exact element={<RegiserUser />} />

          {/* Pass in Private Route wwhich will conform auth and either serve the page or a redirect command */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/weather"
            element={
              <PrivateRoute>
                <WeatherPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/currency"
            element={
              <PrivateRoute>
                <CurrencyExchangePage />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
