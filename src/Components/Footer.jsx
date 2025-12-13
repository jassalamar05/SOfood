import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";




export default function Footer(){
    return(
        <>
        <footer className="relative">
           {/* <!-- SUBSCRIBE BOX --> */}
<section class="w-full h-60 flex justify-center absolute pt-10 z-10 mt-24">
  <div class="bg-orange-100 w-[70%] p-10 rounded-xl text-center">

    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Subscribe For Our <span class="text-orange-600">Exclusive</span> Information
    </h2>

    <div class="flex flex-col md:flex-row justify-center gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        class="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
      />
      <button class="bg-orange-600 text-white px-5 py-2 rounded-md font-medium">
        Subscribe
      </button>
    </div>
  </div>
</section>

{/* <!-- FOOTER --> */}
<footer class="bg-orange-500 text-white absolute mt-60 w-full h-[500px] z-0 pl-48 px-28">
  <div class=" grid grid-cols-4 gap-5 px-10  pt-32">

    {/* <!-- Logo + Description --> */}
    <div>
      <h2 class="text-3xl font-bold mb-4">Sofood</h2>
      <p class="text-white/90 text-sm leading-loose mb-6 pt-4">
        We proudly present authentic dishes from various regions of the archipelago, 
        bringing authentic flavors and Indonesian traditions to every dish we serve.
      </p>

      {/* <!-- Social Media Icons --> */}
       <div className="flex items-center gap-6 pt-6">
       {/* Facebook */}
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white text-orange-600 ">
       <FaYoutube size={16} />
         </div>
      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center ">
        <FaFacebookF size={16} />
         </div>
           
        {/* Instagram */}
         <div className="w-10 h-10 rounded-full border-2  flex items-center justify-center">
        <FaInstagram size={16} />
         </div>
           
            {/* LinkedIn */}
           <div className="w-10 h-10 rounded-full border-2  flex items-center justify-center ">
           <FaLinkedinIn size={16} />
           </div>
         </div>
    </div>

    {/* <!-- Help Center --> */}
    <div className="pl-10">
      <h3 class="text-xl font-semibold mb-3">Help Center</h3>
      <div class="w-52 h-0.5 bg-white mb-4"></div>

      <ul class="space-y-3 text-sm">
        <li class="flex items-center pt-3">➤ Customer Support</li>
        <li class="flex items-center pt-3">➤ Terms & Conditions</li>
        <li class="flex items-center pt-3">➤ Privacy Policy</li>
      </ul>
    </div>

    {/* <!-- Contact Info --> */}
    <div className="pl-5">
      <h3 class="text-xl font-semibold mb-3">Contact Info</h3>
      <div class="w-52 h-0.5 bg-white mb-4"></div>

      <ul class="space-y-3 text-sm">
        <li class="flex items-start pt-3">
          📍 Emerald Street, South Tangerang, Indonesia
        </li>
        <li class="flex items-start pt-3">
          📞 +26 123456789<br /> +26 123456789
        </li>
        <li class="flex items-start pt-3">
          ✉ info@yoursite.com
        </li>
      </ul>
    </div>

    {/* <!-- Opening Hours --> */}
    <div>
      <h3 class="text-xl font-semibold mb-3">Opening Hours</h3>
      <div class="w-52 h-0.5 bg-white mb-4"></div>

      <ul class="space-y-5 pt-3 text-sm">
        <li>Mon - Tue : 08.00 AM - 09.00 PM</li>
        <li>Wed - Thu : 09.00 AM - 10.00 PM</li>
        <li>Fri - Sat : 08.00 AM - 12.00 PM</li>
        <li>Sunday : CLOSED</li>
      </ul>
    </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div class="border-t border-white/30 mt-12 pt-4 text-center text-sm text-white/90">
    © Copyright CimnongStudio 2023. All right reserved.
  </div>

</footer>
</footer>      
        </>
    )
}