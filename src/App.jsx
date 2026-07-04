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

import H from './Home'
import Fil from './assets/Components/Fil'

import Add from './assets/Components/Add'
import Edits from './assets/Components/Edit'
import { Toaster } from 'react-hot-toast'
import Update from './assets/Components/Update'


function App() {

  return (
    <>
    {/* <Ruch3/> */}
    {/* <R/> */}
    {/* <Reac/> */}
    {/* <H/> */}
    {/* <Fil/> */}


   <BrowserRouter>
   <Toaster position='top-right' reverseOrder={false}/>
   <Routes>

 
    {/*👇 DEFAULT PAGE ( / )  aisa iss liye kiya hai kyoki assi do pages nu ik jagah route nai karr sakde thats it*/}
   
    <Route index element={<Rav />} />
    <Route path='/' element={<AdminMaster/>} >
  <Route path='about' element={<AboutUs/>} ></Route>
    <Route path='reserve' element={<Reservations/>} ></Route>
    <Route path='blogs' element={<Blogs/>} ></Route>
     <Route path='chef' element={<Chefs/>} ></Route>
     <Route path='gallery' element={<Gallerys/>} ></Route>
    <Route path='contact' element={<Contact/>} ></Route>
    <Route path='menu' element={<Menu/>} ></Route> 
    <Route path='add' element={<Add/>}></Route>
     <Route path='edit' element={<Edits/>}></Route>
     <Route path='up' element={<Update/>}></Route>
     </Route> 
   </Routes>

   </BrowserRouter>  


    </>
  )
}
export default App





// most important hint about your using a crud in react
// 👉 UPDATE ka golden rule
// ADD → spread (...prev)
// GET → direct set
// UPDATE → map + replace
// DELETE → filter