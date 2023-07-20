import { useState } from 'react'
import CourtSearch from './CourtSearch'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import GamesList from './GamesList'
import AddGame from './AddGame'
import { width } from '@mui/system'
import logo from './assets/Hoopslogo.png'

function App() {

  return (
    <>
    <div style={{width:'100vw', height:'7vh', backgroundColor: 'rgb(112,112,112)', display: 'flex', justifyContent: 'center'}}>
      <img src={logo} width='200' height='70' style={{objectFit:'contain'}}></img>
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexGrow: 1, height:'100%'}}>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default App