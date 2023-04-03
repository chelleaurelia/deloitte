import React, { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from "./pages/login";
import Admin from "./pages/admin";
import Seller from "./pages/seller";
import Buyer from "./pages/buyer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/seller" element={<Seller />}></Route>
            <Route path="/buyer" element={<Buyer />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
