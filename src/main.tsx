import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from "./components/pages/Home.tsx"
import Layout from './components/layouts/Layout.tsx'
import Perfil from "./components/pages/Perfil.tsx"
import AddBoard from './components/pages/AddBoard.tsx'
import Register from "./components/pages/Register.tsx"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route element={<App/>} path="/"></Route>
          <Route element={<Register/>} path="/register"></Route>
        <Route element={<Layout/>}>
          <Route element={<Home/>} path="/home"></Route>
          <Route element={<Perfil/>} path="/perfil"></Route>
          <Route element={<AddBoard/>} path="/addboard"></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
