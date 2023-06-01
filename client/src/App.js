import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import React, { useState } from 'react'
function App() {
  const [isConnected,setIsConnected] = useState(false);
  const [user,setUser] = useState({});
  const userConnected = (user) => {
    console.log("ok");
    setIsConnected(true);
    setUser(user);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isConnected={isConnected} />} />
          <Route path="/vote" element={<Vote isConnected={isConnected} />} />
          <Route path="/contact" element={<Contact isConnected={isConnected} />} />
          <Route path="/menu" element={<Menu isConnected={isConnected} />} />

          <Route path="/login" element={<Login userConnected={userConnected} isConnected={isConnected} />} />
          <Route path="/signup" element={<Signup isConnected={isConnected} />} />
          <Route path="*" element={<Pagenotfound isConnected={isConnected} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
