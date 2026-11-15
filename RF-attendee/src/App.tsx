import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import { Attendee } from './pages/Attendee';
import { NavbarLeft } from './components/navbar/NavbarLeft.jsx';
import { NavbarRight } from './components/navbar/NavbarLeft.jsx';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


/*
  const [count, setCount] = useState(0)

  */

// src/App.jsx

function App() {
  return (
    <div>
    <NavbarLeft />
    <NavbarRight />
    <Attendee />
    </div>

  );
}

export default App;


