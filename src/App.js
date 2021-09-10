import React, { useState, useEffect } from 'react'
import Cover from "./component/cover/Cover";
import "./App.css";
import Navbar from "./component/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
    </div>
  );
}

export default App;
