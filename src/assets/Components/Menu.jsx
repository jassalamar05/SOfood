import { useState } from "react";

export default function Menu(){
const menuData = [
  {
    id: 1,
    name: "Burger",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image:"public/Images/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.webp",
    category: "Snacks",
  },
  {
    id: 2,
    name: "Chicken Seekh Kabab",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos a nobis ut quas inventore ullam maiores, quod nisi ducimus quisquam officiis necessitatibus exercitationem consectetur vitae voluptates adipisci saepe odio facere.",
    image: "",
    category: "Food",
    gradient: true,
  },
  {
    id: 3,
    name: "Mix Veg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image:"public/Images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp",
    category: "Food",
  },
  {
    id: 4,
    name: "Machio",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image:"public/Images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp",
    category: "Snacks",
  },
  {
    id: 5,
    name: "Vegetables",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image:"public/Images/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
    category: "Food",
  },
  {
    id: 6,
    name: "Lenticles",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image: "public/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp",
    category: "Food",
  },
  {
    id: 7,
    name: "Pizza",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image: "public/Images/istockphoto-104704117-612x612.jpg",
    category: "Cart",
  },
  {
    id: 8,
    name: "Salad",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, error.",
    image: "public/Images/pexels-ella-olsson-572949-1640777.jpg",
    category: "Cart",
  },
];  


      // USE STATE
      const[datas,setDatas]=useState(menuData);
    
      // button di conditions banyi 
      const showAll=()=>setDatas(menuData)

      // item .category use ki hai kyoki data (array of object ki form mei hai)

      // aagr data normal array ki form mei hai toh item ke sath category nai likhna (that will give you undefined)
      const Food=()=>setDatas(menuData.filter(item=>item.category==="Food"))
      const Cart=()=>setDatas(menuData.filter(item=>item.category==="Cart"))
      const Snacks=()=>setDatas(menuData.filter(item=>item.category==="Snacks"))


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






<div className="h-80">
    <div className="flex justify-center items-center mt-20">
        <div className=" bg-orange-500 h-1 w-10"></div>
    </div>


    <div className="flex justify-center items-center mt-3 scroll-mt-20" id="menu">OUR MENU</div>
    <div className="flex items-center justify-center mt-5">
    <p className="text-4xl font-bold">Where Flavor <span className="text-orange-500"> Meet Innovation </span>- Your <br /> Ultimate Culinary Destination</p>
   </div>
    
   <div className="flex items-center justify-center mt-5">
    <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores pariatur minima deleniti perferendis sint placeat. Voluptas quis cupiditate ut laudantium
         eveniet aspernatur ipsum obcaecati alias ea hic, officia quos aliquid nam ab minus? Consequatur consequuntur exercitationem, corrupti ea alias veritatis, quo asperiores 
         </p>
   </div>
   </div>

<section>
  <div className="flex justify-center pb-20 items-center gap-10 cursor-pointer">
    <button onClick={showAll} className="bg-orange-600 flex items-center justify-center text-sm h-7 w-20 rounded text-white">View All</button>
    <button onClick={Food} className=" border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Food</button>
    <button onClick={Cart} className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Cart</button>
    <button onClick={Snacks} className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">Snacks</button>
   </div>
 <div>

  
  {/* jsx likhi and mapping krti of images , name , description , title -- item, index  , unique key pass krke */}
      <div  className="grid grid-cols-4 gap-4 px-36">
        {datas.map((item,index)=>(
          <div key={item.id} className="border-[2px] border-orange-500">

            <div className="bg-cover h-[200px] ">
               {item.image ? (
                  <img
                    src={item.image}
                    className="h-[200px] w-full object-cover"
                  />
                ) : (
                  <div className="h-[200px] w-full bg-gradient-to-t from-orange-400 to-blue-200 flex items-center justify-center">
                    <p className="text-white font-bold text-xl text-center px-4">
                      {item.name}
                    </p>
                  </div>
                  )}
            </div>
            <div className="text-orange-400 font-bold mx-4" >{item.name}</div>
            <div className="text-[10px] mx-3 text-gray-500">{item.description}</div>
            
          </div>
        ))}
      </div>
      </div>
</section>
   </>     
        
    )
}

