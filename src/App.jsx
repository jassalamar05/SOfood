import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminMaster from './Components/AdminMaster'
import AboutUs from './assets/Components/About'
import Reservations from './assets/Components/Reservation'
import Blogs from './assets/Components/Blog'
import Chefs from './assets/Components/Chef'
import Gallerys from './assets/Components/Gallery'
import Contact from './assets/Components/Contact'
import Menu from './assets/Components/Menu'
import Rav from './assets/Components/Ruchie'
import Reac from './assets/Components/Reac.'

function App() {

  return (
    <>
    {/* <Ruch3/> */}
    {/* <R/> */}
    {/* <Reac/> */}

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Rav/>} ></Route>
    <Route path='/' element={<AdminMaster/>} >
    <Route path='/about' element={<AboutUs/>} ></Route>
    <Route path='/reserve' element={<Reservations/>} ></Route>
    <Route path='/blogs' element={<Blogs/>} ></Route>
     <Route path='/chef' element={<Chefs/>} ></Route>
     <Route path='/gallery' element={<Gallerys/>} ></Route>
    <Route path='/contact' element={<Contact/>} ></Route>
    <Route path='/menu' element={<Menu/>} ></Route>
    </Route>
   </Routes>
   </BrowserRouter>


    </>
  )
}

export default App
