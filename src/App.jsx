import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import AdminMaster from './Components/AdminMaster'
import Ruch2 from './assets/Components/Ruchi2'
import AboutUs from './assets/Components/About'
import Reservations from './assets/Components/Reservation'
import Blogs from './assets/Components/Blog'
import Chefs from './assets/Components/Chef'
import Gallerys from './assets/Components/Gallery'
import Contact from './assets/Components/Contact'
import Ruch3 from './assets/Components/Ruchi2'
import R from './assets/Components/Ruchie'
import Menu from './assets/Components/Menu'


function App() {

  return (
    <>
    {/* <Ruch3/> */}
    {/* <R/> */}


   <BrowserRouter>
   <Routes>
    <Route path='/' element={<R/>} ></Route>


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
