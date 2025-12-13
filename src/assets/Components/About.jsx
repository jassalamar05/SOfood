import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function AboutUs(){
    return(
        <>
        {/* about section header wala page */}
        <section>
            <div className="bg-[url(public/Images/istockphoto-1457979959-612x612.jpg)] bg-cover opacity-90 h-[520px]">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">About Us</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">About Us</span>
                </div> 
                </div>
            </div>
        </section>



        {/* about us home section */}
        <section>
        <div className="h-screen">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="relative flex justify-end">
                    <div className="bg-orange-500 w-full h-[400px] mt-32 absolute px-2"></div>
                      <div className="bg-[url(public/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp)] bg-cover w-[520px] h-[600px] absolute mt-10 mx-5"></div>
                    </div>
                </div>

                <div className="col-span-1 mx-5">
                    <div className="w-[70%] mt-32">
                        {/* abut us text */}
                        <div className=" flex items-center gap-5">
                             <p className="bg-orange-500 h-[2px] w-[35px]"></p>
                            <p className="text-1xl font-semibold">A B O U T U S </p>
                        </div>
                        
                        {/* home text */}
                        <div className="text-4xl font-serif font-semibold mt-8">
                            <p>Experience Our <br /> <span className="text-orange-500">Culinary</span>  Journey</p>
                        </div>

                        {/* home lorem text */}
                        <div className="mt-10 text-sm leading-tight text-justify">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident iste praesentium dignissimos sapiente ex placeat explicabo incidunt, exercitationem ad iure?</p>
                        </div>

                        {/* image section short */}
                        <div className="flex justify-center gap-[90px] mt-10">
                            <div className=" bg-[url(public/Images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp)] bg-cover h-[105px] w-32 rounded-full"></div>
                            <div className=" bg-[url(public/Images/1-10-Most-Consumed-Beverages-in-the-World-Source-vinut.com_.vn_.webp)] bg-cover h-[105px] w-32 rounded-full"></div>
                            <div className=" bg-[url(public/Images/2aut47ag_north-indian-food_625x300_28_March_25.jpg)] h-[105px] w-32 rounded-full bg-cover" ></div>
                        </div>

                           <div className="flex items-center justify-between ml-5 mt-5 text-orange-500 font-semibold">
                            <div className="">Snacks</div>
                            <div className="">Beverages</div>
                            <div className="">Main Dishes</div>
                        </div>
                  </div>

                </div>
            </div>
        </div>
        </section>


        {/*  images section */}
        <section className="h-[600px]">
            <div className="grid grid-cols-4 px-[250px] gap-2 h-[500px]">

                    <div className="bg-[url(public/Images/catering-staff-serves-food-buffet-600nw-2630302985.webp)] bg-cover w-[250px]"></div>
                    <div className="bg-orange-500 w-[250px] h-[250px]">
                        <div className="bg-[url(public/Images/g.png)] bg-cover h-[80px] w-[80px] ml-[70px] mt-5"></div>
                        <p className="text-white text-xl text-center font-semibold">Catering Packages</p>
                        <p className="text-white text-sm leading-tight pt-5 text-center px-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.enim id molestias possimus recusandae asperiores nam reiciendis vero</p>
                    </div>


                    <div className="bg-[url(public/Images/istockphoto-485286424-612x612.jpg)] bg-cover w-[250px] "></div>

                    <div className="border-[3px] border-orange-500 border-dashed w-[250px] ">
                        <div className="bg-[url(public/Images/darker3.png)] bg-cover h-[110px] w-[180px] "></div>
                        <p className="text-center text-orange-500 text-xl font-semibold">Cooking Class</p>
                        <p className="text-gray-500 text-sm leading-tight pt-4 text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.enim id molestias possimus recusandae asperiores nam reiciendis vero</p>
                    </div>


                    <div className="border-[3px] border-orange-500 border-dashed w-[250px] ">
                        <div className="bg-[url(public/Images/darker.png)] bg-cover h-[120px] w-[140px] ml-3"></div>
                        <p className="text-center text-orange-500 text-xl font-semibold">Order Deliver</p>
                          <p className="text-gray-500 text-sm leading-tight pt-4 text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.enim id molestias possimus recusandae asperiores nam reiciendis vero</p>
                    </div>


                    <div className="bg-[url(public/Images/Restaurant-Online-Food-Delivery-1.webp)] bg-cover w-[250px] h-[250px]"></div>


                    <div className="border-[3px] border-orange-500 border-dashed w-[250px] ">
                    <div className="bg-[url(public/Images/darker2.png)] bg-cover h-[100px] w-[140px] ml-7"></div>
                     <p className="text-center text-orange-500 text-xl font-semibold">Reservations</p>
                    <p className="text-gray-500 text-sm leading-tight pt-4 text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.enim id molestias possimus recusandae asperiores nam reiciendis vero</p>
                    </div>
                
                    <div className="bg-[url(public/Images/images.jpg)] bg-cover w-[250px] "></div>
                </div>
        </section>



        {/*  why choice us */}

        <section>
            <div  className="h-screen relative">
            <div className="bg-gray-400 h-full w-full absolute">
                <div className="bg-orange-500 h-[80%] w-[90%] absolute m-20 grid grid-cols-2">
                    <div className="grid-cols-1 mx-32 mt-52">
                        <div className="flex items-center gap-2">
                        <p className="bg-white h-[2px] w-[30px]"> </p>
                        <p className="text-white tracking-widest">WHY  CHOICE US </p>
                        </div>

                       <p className="text-white font-bold text-[42px] leading-tight font-serif mt-5">Our Commitment is <br /> Why We Stand Out</p>
                 </div>

            {/* right coloum */}

                <div className="flex gap-10 mt-32">
                    <div className="flex-col items-center justify-center">
                            <div className="bg-[url(public/Images/target.png)] bg-cover h-[70px] w-[70px]"></div>
                            <div className="mt-16 bg-[url(public/Images/Sjk.png)] bg-cover h-[70px] w-[70px]"></div>
                            <div className="mt-16 bg-[url(public/Images/diamonfd.png)] bg-cover  h-[70px] w-[70px]"></div>
                    </div>  

                    <div className="flex-col items-center justify-center text-white">
                        <div>
                            <p className="text-xl font-semibold">SoFood Vision</p>
                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque voluptatibus enim minima praesentium, qui libero ut quo at illum dolorum.</p>
                        </div>

                        <div className="mt-10">
                            <p className="text-xl font-semibold">SoFood Vision</p>
                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque voluptatibus enim minima praesentium, qui libero ut quo at illum dolorum.</p>
                        </div>

                         <div className="mt-10">
                            <p className="text-xl font-semibold ">SoFood Vision</p>
                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque voluptatibus enim minima praesentium, qui libero ut quo at illum dolorum.</p>
                        </div>

                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        </section>


        {/* meet our chefs */}
        <section> 
            <div className="h-screen">
                <div className="flex justify-center items-center">
                     <p className="bg-orange-500 h-[2px] w-[30px] mt-20"></p>
                </div>
                <div className="flex-col pt-5">
                    <p className="text-center text-[20px]">OUR CHEFS</p>
                    <p className="text-center text-5xl font-semibold pt-8">Meet Our <span className="text-orange-500">  Culinary </span>Artists</p>
                </div>


                <div className="grid grid-cols-3 mt-20 h-[400px] gap-8 px-32">
                    <div className="  shadow-xl">
                        <div className="bg-[url(public/Images/c.avif)] bg-cover h-[300px]"></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.Benny John</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>


                            <p>
                            <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>
                  
                    <div className=" shadow-xl">
                        <div className="bg-[url(public/Images/c2.jpg)] bg-cover h-[300px]"></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.Chand Siyap</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>


                            <p>
                                <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>

                      <div className=" shadow-xl">
                        <div className="bg-[url(public/Images/c3.jpg)] bg-cover h-[300px]"></div>
                        <div className="text-center pt-5">
                            <p className="text-orange-500 text-3xl font-bold">Mr.David Orja</p>
                            <p className="text-gray-500 text-lg pt-5">Traditional Chef</p>
                            <p>

                                 <div className="flex  justify-center gap-4 p-10">
                            {/* Facebook */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaFacebookF size={10} />
                            </div>

                            {/* Instagram */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaInstagram size={10} />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                                <FaLinkedinIn size={10} />
                            </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}