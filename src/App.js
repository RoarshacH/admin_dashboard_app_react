import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import RegiserUser from "./pages/registerUser";
import Dashboard from "./pages/dashboard";
import Tools from "./pages/tools";

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
        <Route path="/tools" exact element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;
