import { Link } from "react-router-dom";

export default function Head(){
    return(
        <>
        {/* <!-- TOP INFO BAR --> */}
<div className="w-full bg-orange-600 text-white text-sm py-2">
  <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

    {/* <!-- Left text --> */}
    <p>Welcome to Our Culinary Haven!</p>

    {/* <!-- Right contact items --> */}
    <div className="flex items-center gap-6">

      {/* <!-- Email --> */}
      <div className="flex items-center gap-1">
        {/* <!-- mail icon --> */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-4" fill="none" stroke="white" strokeWidth="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 4h16v16H4zM4 4l8 8 8-8" />
        </svg>
        info@yoursite.com
      </div>

      {/* <!-- Phone --> */}
      <div className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="white" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2 3l3 1 2 5-3 2a14 14 0 007 7l2-3 5 2 1 3c0 1-1 2-2 2A17 17 0 012 5c0-1 1-2 2-2z" />
        </svg>
        +62 123456789
      </div>

      {/* <!-- Location --> */}
      <div className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="white" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 21s6-5.7 6-11a6 6 0 10-12 0c0 5.3 6 11 6 11z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
        Emerald Street
      </div>

    </div>
  </div>
</div>

{/* <!-- NAVBAR --> */}
<nav className="w-full bg-white py-4 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 flex">

    {/* <!-- Logo --> */}
    <div className="flex items-center gap-2 flex-grow">
      <svg width="28" height="28" fill="none" stroke="#f97316" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M4 10c2-4 6-4 8 0s6 4 8 0" />
      </svg>
      <h1 className="text-3xl font-bold text-orange-600">Sofood</h1>
    </div>
{/* 
    <!-- Navigation Links --> */}
    <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
      <Link to={"/"}className="hover:text-orange-600 cursor-pointer ">Home</Link>
       <Link to={"/menu"} className="hover:text-orange-600 cursor-pointer">Menu</Link>

      {/* <!-- Information with dropdown arrow --> */}
        <div className="relative inline-block group">
      {/* <!-- Information with dropdown arrow (kept your code) --> */}
      <ul className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
        Information
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* Dropdown (positioned absolutely) */}
      <div
  className="absolute left-0 w-48 rounded-lg shadow-lg bg-white
             opacity-0 scale-95 transform transition-all duration-150
             group-hover:opacity-100 group-hover:scale-100
             pointer-events-none group-hover:pointer-events-auto z-50"
>
  <ul className="py-5 ">
    <li>
      <Link
        to="/about"
        className="block px-4 py-2 text-sm hover:text-orange-500 hover:bg-gray-100 cursor-pointer"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/reserve"
        className="block px-4 py-2 text-sm hover:text-orange-500 hover:bg-gray-100 cursor-pointer"
      >
        Reservation
      </Link>
    </li>

    <li>
      <Link
        to="/chef"
        className="block px-4 py-2 text-sm hover:text-orange-500 hover:bg-gray-100 cursor-pointer"
      >
        Chefs
      </Link>
    </li>

    <li>
      <Link
        to="/gallery"
        className="block px-4 py-2 text-sm hover:text-orange-500 hover:bg-gray-100 cursor-pointer"
      >
        Gallery
      </Link>
    </li>
  </ul>
</div>
</div>


        <Link to={"/blogs"}  className="hover:text-orange-600 cursor-pointer">Blog</Link >
        <Link to={"/contact"} className="hover:text-orange-600 cursor-pointer">Contact</Link>

    </ul>

    {/* <!-- Call Us Button --> */}
     <button className="bg-orange-600 text-white w-24 h-8 rounded-lg hover:scale-110 transition-transform duration-200 animate-pulset flex items-center justify-center gap-3 ml-10">
     <i class="fi fi-rr-phone-call"></i>
     Call Us
     </button> 
  </div>
</nav>

        
        
        
        </>
    )
}