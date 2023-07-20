import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GamesList from './GamesList.jsx'
import AddGame from './AddGame.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CourtSearch from './CourtSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path= '/' element={<CourtSearch/>} index></Route>
        <Route path='/Games/:location'element={<GamesList></GamesList>}></Route>
        <Route path='/Add' element={<AddGame></AddGame>}></Route>
        </Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
)
