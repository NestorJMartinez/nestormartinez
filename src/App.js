import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Invalid route</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
