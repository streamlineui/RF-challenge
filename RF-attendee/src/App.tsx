import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import { Attendee } from './pages/attendee/Attendee.jsx';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';


/*
  const [count, setCount] = useState(0)

  */

// src/App.jsx

function App() {
  return (
    <BrowserRouter>
      {/* Attendee navigation link */}
      <nav>
      <Link to="/attendees">Attendees</Link>
      </nav>

      {/* Route definitions */}
      <Routes>
      <Route path="/" element={<Attendee />} />
      <Route path="/attendees" element={<Attendee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


