import {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Astros from './Components/Astros/Astros';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import './App.css'

// Constante de login
const isLogged = true;

const userData = {
  name: 'Zabdiel',
  age: '25'
}

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

// Navbar ------------

// Main --- ruta: /
// Astros --- ruta: /astros
// APOD --- ruta: /apod

function App() {
  
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);
  
  return (
    <>
      <Navbar
        links={links}
        isLogged={JSON.parse(localStorage.login)}
      />

      <Routes>
        <Route
          path='/'
          element={<Main {...userData} />}
          />
        <Route
          path='/astros'
          element={<Astros />}
        />
      </Routes>
    </>
  )
}

export default App
