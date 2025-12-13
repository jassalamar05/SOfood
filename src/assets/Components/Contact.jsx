import { Mail, Phone, MapPin, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Contact(){
    return(
        <>
             <section>
            <div className="bg-[url(public/Images/traditional-italian-food-world-tourism-day_23-2149114038.avif)] bg-cover bg-center h-[520px] ">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">Contact</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">Gallery</span>
                </div> 
                </div>
            </div>
        </section> 
        

 <section>

             <div className="w-full min-h-screen p-10 bg-white flex items-start justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Card */}
        <div className="bg-orange-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Embark on a Culinary Conversation with Us. Reach out and let's create memorable
            moments together. Your inquiries, feedback, and shared experiences enrich our
            culinary journey. Get in touch!
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 bg-orange-200 rounded-md p-3  w-72 mb-4">
            <Mail size={20} className="text-orange-600" />
            <span className="text-gray-700">info@yoursite.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-4 pt-6">
            <Phone size={20} className="text-orange-600" />
            <span className="text-gray-700">+26 123456789, +26 123456789</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 mb-6 pt-6">
            <MapPin size={20} className="text-orange-600 mt-1" />
            <span className="text-gray-700">
              Emerald Street, South<br />Tangerang, Indonesia
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pl-6 pt-6">
               {/* Facebook */}
           <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:col-span-2">
        <div className="flex items-center gap-3">
         <p className="bg-orange-500 h-[3px] w-[30px]"></p>
          <p className="tracking-widest text-sm text-gray-500 mb-3 pt-3">MESSAGE US</p>
            </div>
          <h1 className="text-4xl font-bold ">
            Let's <span className="text-orange-600">Connect</span> and{" "}
            <span className="text-orange-600">Share</span> Culinary{" "}
            <span className="text-orange-600">Experiences</span>
          </h1>

          <form className="mt-8 space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input className="border border-orange-300 p-3 rounded-md w-full" placeholder="Name" />
              <input className="border border-orange-300 p-3 rounded-md w-full" placeholder="Last Name" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input className="border border-orange-300 p-3 rounded-md w-full" placeholder="Email" />
              <input className="border border-orange-300 p-3 rounded-md w-full" placeholder="Phone" />
            </div>

            {/* Subject */}
            <input className="border border-orange-300 p-3 rounded-md w-full" placeholder="Subject" />

            {/* Message */}
            <textarea
              rows="6"
              className="border border-orange-300 p-3 rounded-md w-full"
              placeholder="Write a message">
            </textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition">
              Submit Now
            </button>

          </form>
        </div>
      </div>
    </div>
</section>


<section>
  <div className="h-[700px] bg-[url(public/Images/hi7-food-delivery-suryapet-nvbk6vythv.avif)] bg-no-repeat bg-right">

  </div>
</section>
    
        
        </>
    )
}