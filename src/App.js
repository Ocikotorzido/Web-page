import React, { useState, useEffect } from 'react'
import Cover from "./component/cover/Cover";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Proyectos from './component/proyectos/Proyectos';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <Proyectos/>
      <Footer/>
    </div>
  );
}

export default App;
