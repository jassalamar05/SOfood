export default function Menu(){
    return(
        <>
      <section>
            <div className="bg-[url(public/Images/istockphoto-1457979959-612x612.jpg)] bg-cover opacity-90 h-[520px]">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">Menu</div>

               <div className="flex items-center gap-2 text-white text-sm mt-5">
                 <span className="cursor-pointer hover:underline">Home</span>
                <span>{">"}</span>
                <span className="cursor-pointer hover:underline">Information</span>
                <span>{">"}</span>
                 <span className="text-orange-500 font-semibold">Menu</span>
                </div> 
                </div>
            </div>
        </section>




        <section>
   <div className="flex justify-center mt-20 pb-20 items-center gap-10 cursor-pointer">
    <div className="bg-orange-600 flex items-center justify-center text-sm h-7 w-20 rounded text-white">View All</div>
    <div className=" border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Food</div>
    <div className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Cart</div>
    <div className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Snacks</div>
   </div>
 


      <div className="grid grid-cols-4 gap-4 px-36">
            <div className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp)] bg-cover h-[200px]"></div>
                <div>
                <p className="text-orange-400 font-bold mx-4">Burger</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div>
                <div className="bg-gradient-to-t from-orange-400  to-blue-300 h-[300px]">
                    <div className=" pt-32">
                        <p className="text-white font-bold text-2xl mx-3">Chicken Seekh Kabab</p>
                        <p className="text-sm mx-3 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos a nobis ut quas inventore ullam maiores, quod nisi ducimus quisquam officiis necessitatibus exercitationem consectetur vitae voluptates adipisci saepe odio facere.</p>
                    </div>
                </div>
            </div>



            <div  className="border-[1px] border-orange-400 h[300px]">
                <div className="bg-[url(public/Images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Mix Veg</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Machio</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg)] bg-cover h-[200px]"></div>
                  <div >
                <p className="text-orange-400 font-bold mx-4">Vegetables</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Lenticles</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Pizza</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>


            <div  className="border-[1px] border-orange-400 h-[300px]">
                <div className="bg-[url(public/Images/pexels-ella-olsson-572949-1640777.jpg)] bg-cover h-[200px]"></div>
                  <div>
                <p className="text-orange-400 font-bold mx-4">Salad</p>
                <p className="text-[10px] mx-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.</p>
                </div>
            </div>
        </div>

        </section>

        
        
        </>
    )
}