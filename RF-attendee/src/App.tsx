import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.scss'
import { Attendee } from './pages/Attendee';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


/*
  const [count, setCount] = useState(0)

  */

// src/App.jsx

function App() {
  return (
   <Attendee />
  );
}

export default App;


