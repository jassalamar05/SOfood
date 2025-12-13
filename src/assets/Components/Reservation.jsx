export default function Reservations(){
    return(
        <>
{/* about section header wala page */}
        <section>
            <div className="bg-[url(public/Images/booking_banner.jpg)] bg-cover opacity-90 h-[520px] ">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">Reservation</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">Reservation</span>
                </div> 
                </div>
            </div>
        </section>  

        {/* input form */}

        <section>
            <div>
                <div className="flex items-center justify-center mt-10">
                    <p className="bg-orange-500 h-[3px] w-[50px]"></p>
                </div>

                <div>
                    <p className="text-center mt-5 tracking-widest">ONLINE RESERVE</p>
                </div>

                  <div className="text-5xl font-bold">
                    <p className="text-center mt-5 tracking-widest"> Easy <span className="text-orange-500">Steps</span>  to <span className="text-orange-500">Enjoyment</span></p>
                </div>
            </div>
        </section>

{/* form */}
        <section>
            <div className="bg-orange-50 h-[500px] mt-20 mx-20">
                <div>
                    <form action="" className="grid grid-cols-2 gap-10 pt-28 p-20 ">
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5" placeholder="Name" />
                        <input type="text" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" placeholder="Phone" />
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5" placeholder="People"/>
                        <input type="date" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" placeholder="mm/dd/yy" />
                        <input type="text" className="border-orange-700 border-[2px] h-12 rounded-md text-gray-600 px-5 " placeholder="00:00 am"/>
                        <input type="text" className="border-orange-700 border-[2px] rounded-md text-gray-600 px-5" placeholder="Email" />
                    </form>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-orange-500 h-10 w-96 rounded-md text-white text-md">Reserve Now</button>
                </div>     
            </div>
        </section>


{/* heading */}
        <section>
            <div className="h-[600px] mt-20">
                <div className="bg-[url(public/Images/discounbt.png)] h-[500px] bg-cover">

                <div className="text-5xl text-white text-center font-bold pt-20">
                    <p>Thrusday Special <span className="text-orange-600"> 15% Off </span>for the Best <br />Flavored Adventures!
                    </p>
                </div>
                <div className="text-white mt-5">
                     <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque voluptas praesentium <br />Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="text-white flex justify-center mt-20">
                    <button className="bg-orange-600 h-10 w-96">Reserve a Table Now!</button>
                </div>
                </div>
            </div>
        </section>

{/* pictures section */}

        <section> 
            <div className="h-screen"> 
                <div className="flex justify-center">
                     <p className="bg-orange-600 h-[3px] w-[40px]"></p>
                </div>

                <div className="text-center mt-5 tracking-widest  font-semibold">
                    <p>SPECIAL PACKAGE OFFERS</p>
                </div>

                <div className="text-5xl text-center mt-5 font-bold">
                    <p>Explore More <span className="text-orange-600"> Delights</span> with <br />  <span className="text-orange-600">Exclusive Meal</span> Packages</p>
                </div>

{/* another part */}
                <div className="grid grid-cols-2 gap-5 px-36 mt-20">
                    <div className="col-span-1">
                        <div className="border-[1px] border-dashed border-x-2 border-y-2 border-orange-600 h-[280px]">
                               <div className="flex justify-center gap-10">

                                <div className="pl-10 pt-10">
                                 <p className="text-orange-600 text-xl font-semibold">Taste Of The Archipelago</p> 
                                <p className="mt-2">
                                Taste the culinary richness of the archipelago in one food package.
                                </p>
                                <ul className="mt-3 space-y-1 list-disc list-inside">
                                <li>Main Course</li>
                                <li>Traditional Beverage</li>
                                <li>Signature Dessert</li>
                                 </ul>
                                </div>
                               <div>
                                    <div className="bg-[url(public/Images/ic01.webp)] bg-cover h-[250px] w-[250px] mx-5 mt-3 "></div>
                               </div>
                         </div>
                     </div>
                 </div>



                 <div className="col-span-1">
                        <div className="border-[1px] border-dashed border-x-2 border-y-2 border-orange-600 h-[280px]">
                               <div className="flex justify-center gap-10">

                                <div className="pl-10 pt-10">
                                 <p className="text-orange-600 text-xl font-semibold">Rendering Exploration</p> 
                                <p className="mt-2">
                              Choose this package and enjoy randang dishes in 5 differnt styles
                                </p>
                                <ul className="mt-3 space-y-1 list-disc list-inside">
                                <li>Main Course</li>
                                <li>Traditional Beverage</li>
                                <li>Signature Dessert</li>
                                 </ul>
                                </div>
                               <div>
                                    <div className="bg-[url(public/Images/ic01.webp)] bg-cover h-[250px] w-[250px] mx-5 mt-3 "></div>
                               </div>
                         </div>
                     </div>
                 </div>

                      
                </div>
            </div>
        </section>
        </>
    )
}