import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AddEventPage from '../Pages/AddEventPage.js'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import Privateroute from './PrivateRoute.js'
import SingleEvent from '../Pages/SingleEvent.js'
function Allroutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<Register/>}/>
            <Route path ="/addEvent" element={<Privateroute><AddEventPage/></Privateroute>}/>
            <Route path ="/event/:eventId" element={<Privateroute><SingleEvent/></Privateroute>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Allroutes