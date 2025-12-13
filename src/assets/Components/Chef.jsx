import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



export default function Chefs(){
    return (
        <>
     {/* about section header wala page */}
        <section>
            <div className="bg-[url(public/Images/photo-1600565193348-f74bd3c7ccdf.jpg)] bg-cover bg-center h-[520px] ">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">Chef</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">Chef</span>
                </div> 
                </div>
            </div>
        </section>  

    {/* main chef section */}
        <section className="h-screen">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="flex relative mt-20 pl-24">
                        <div className="bg-orange-600 h-[450px] w-[450px] absolute mt-40"></div>
                         <div className="bg-[url(public/Images/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208288.avif)] bg-cover h-[500px] w-[450px] absolute ml-28"></div>
                    </div>       
                </div>

{/*  */}
     <div>
      <div className="mt-24 w-[600px]">
      {/* Top Heading */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-[2px] bg-orange-500"></span>
        <p className="tracking-[0.3em] text-sm font-semibold text-gray-700">
          HEAD CHEFS
        </p>
      </div>

      {/* Name */}
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        Mr. Albert <br />
        <span className="text-orange-500">Eduardo's</span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-6 leading-7">
        I grew up with a deep passion for Indonesian cuisine and have dedicated
        myself to exploring the country's rich flavors and culinary traditions.
        With the experience and knowledge I have gained from all over the 
        archipelago, I strive to present authentic deliciousness in each of our
        dishes. My commitment to fresh ingredients and high-quality seasonings 
        helps ensure that every dish that comes out of our kitchen is an 
        unforgettable work of taste art.
      </p>

      {/* Social Icons */}
       <div className="flex gap-5 mt-10">
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
    
  </div>
 </div>
 </section>

{/* best chef */}

<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="flex items-center gap-3 mb-4">
    <span className="w-10 h-[2px] bg-orange-500"></span>
    <p className="tracking-[0.3em] text-sm font-semibold text-gray-700">
      OUR TEAMS
    </p>
  </div>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
    Our <span className="text-orange-500">Best Chef</span> To Serve
    <span className="text-orange-500">You</span>
  </h2>

 
  <div className="grid grid-cols-2 gap-12">
    <div className="flex gap-6">
      <div className="bg-[url(public/Images/c2.jpg)] bg-cover h-32 w-32"></div>

      <div>
        <h3 className="text-xl font-semibold mb-1">
          <span className="text-orange-500">Mr. Benny Jhonen</span>
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          With the experience and knowledge I have <br />
          gained from all over the archipelago
        </p>

         <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>


      </div>
    </div>

    
    <div className="flex gap-6">
      <div className="w-32 h-32 bg-[url(public/Images/chef.jpeg)] bg-cover"></div>

      <div>
        <h3 className="text-xl font-semibold mb-1">
          <span className="text-orange-500">Mr. Manthan Pachars</span>
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          With the experience and knowledge I have <br />
          gained from all over the archipelago
        </p>

       <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>

      </div>
    </div>

  
    <div className="flex gap-6">
      <div className="w-32 h-32 bg-[url(public/Images/c.avif)] bg-cover">Image Here</div>

      <div>
        <h3 className="text-xl font-semibold mb-1">
          <span className="text-orange-500">Mr. Lucky Andreas</span>
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          With the experience and knowledge I have <br />
          gained from all over the archipelago
        </p>

        <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>
      </div>
    </div>

 
    <div className="flex gap-6">
      <div className="bg-[url(public/Images/c3.jpg)] bg-cover w-32 h-32"></div>

      <div>
        <h3 className="text-xl font-semibold mb-1">
          <span className="text-orange-500">Mr. Manthan Pachars</span>
        </h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          With the experience and knowledge I have <br />
          gained from all over the archipelago
        </p>

        <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>

      </div>
    </div>

  </div>
</section>


{/*  */}
<section className="max-w-7xl mx-auto px-20 py-16 grid grid-cols-2 gap-12 ">
  <div className="flex gap-8">
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-48 bg-[url(public/Images/c3.jpg)] bg-cover">
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-orange-600 mb-2">Mr. Betrands</h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          With the experience and knowledge I have gained from all
          over the archipelago
        </p>

         <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>
      </div>
    </div>

    
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-48 bg-[url(public/Images/c.avif)] bg-cover">
        Image Here
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-orange-600 mb-2">Mrs. Lusiania</h3>

        <p className="text-gray-600 text-sm leading-6 mb-4">
          I am able to present authentic deliciousness in each of our dishes.
        </p>

      
          <div className="flex gap-5 mt-10">
           {/* Facebook */}
           <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF size={10} />
            </div>
     
         {/* Instagram */}
         <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
        <FaInstagram size={10} />
         </div>
     
      {/* LinkedIn */}
     <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
     <FaLinkedinIn size={10} />
     </div>
     </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-center">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-10 h-[2px] bg-orange-500"></span>
      <p className="tracking-[0.3em] text-sm font-semibold text-gray-700">
        SPECIALIST CHEF
      </p>
    </div>

  
    <h2 className="text-5xl font-bold leading-tight mb-6">
      Indonesian <span className="text-orange-500">Taste</span> <br />
      Expert Chef
    </h2>

  
    <p className="text-gray-600 leading-7 text-lg">
      Every dish they create is the result of deep knowledge of traditional 
      recipes, the finest fresh ingredients and a high sense of artistry. 
      They not only cook food, but also live a mission to express the rich 
      taste and culture of the archipelago through every bite you enjoy.
    </p>
  </div>

</section>


        </>
    )
}