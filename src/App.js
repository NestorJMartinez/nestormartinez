import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
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
          <Route path="/resume" element={<ResumePage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
