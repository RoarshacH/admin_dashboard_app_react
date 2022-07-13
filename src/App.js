import "./App.css";

import Header from "./components/header";
// import Footer from "./components/footer";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import RegiserUser from "./pages/registerUser";
import Dashboard from "./pages/dashboard";
import WeatherPage from "./pages/weatherPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/register" exact element={<RegiserUser />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/weather" exact element={<WeatherPage />} />
      </Routes>
    </div>
  );
}

export default App;
