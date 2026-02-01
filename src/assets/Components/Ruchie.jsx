import { CalendarDays, MessageSquare } from "lucide-react";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";




export default function Rav(){
      const slider=[
    {
      id: 1,
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel in aut? Iure?",
      name: "Ismail",
      bg: "bg-orange-600",
      textColor: "text-white",
      shadow: true,
      Img: "public/Images/star2.png",
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel in aut? Iure?",
      name: "Khan",
      bg: "bg-white",
      textColor: "text-black",
      shadow: true,
      Img: "public/Images/star2.png",
    },
     {
      id: 3,
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel in aut? Iure?",
      name: "Punnet",
      bg: "bg-white",
      textColor: "text-black",
      shadow: true,
      Img: "public/Images/star2.png",
    },
      {
      id: 4,
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque dicta eius repellat, optio doloribus ipsa modi voluptate corrupti minima enim quaerat adipisci itaque velit sint vel, soluta quam porro mollitia explicabo magnam. Ipsam veritatis enim vel in aut? Iure?",
      name: "David",
      bg: "bg-orange-600",
      textColor: "text-white",
      shadow: true,
      Img: "public/Images/star2.png",
    },
  ];
  
  const[data,setData]=useState(0);
  
  const next=()=>{
      if(data+2<slider.length){
          setData(data+2)
      }
  }
  
  const prev=()=>{
      if(data>0){
          setData(data-2)
      }
  }





  // cards


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
<div
  className=" bg-[url('/Images/p.jpg')] bg-cover bg-center w-screen h-[400px] sm:h-[500px] md:h-[600px]  lg:h-[700px">

   <div className="bg-black lg:h-24 h-10 flex items-center justify-between px-6 md:px-10 bg-opacity-30">
  
  {/* LOGO */}
  <div className="text-xl md:text-3xl font-extrabold text-white">
    F O O D C O U R T
  </div>

  {/* DESKTOP MENU */}
  <ul className="
    hidden 
    lg:flex 
    items-center 
    justify-center 
    gap-20 
    cursor-pointer
  ">
    <Link to="/" className="text-white font-bold">Home</Link>
    <Link to="/menu" className="text-white font-bold">Menu</Link>
    <Link to="/blogs" className="text-white font-bold">Blog</Link>
    <Link to="/contact" className="text-white font-bold">Contact</Link>
    <li className="text-white font-bold">Catering</li>

    <button className="bg-orange-600 text-white w-24 h-8 rounded-lg hover:scale-110 transition-transform duration-200 animate-pulset flex items-center justify-center gap-2">
      <i className="fi fi-rr-phone-call"></i>
      Call Us
    </button>
  </ul>

  {/* MOBILE MENU ICON */}
  <div className="lg:hidden text-white text-2xl cursor-pointer">
    ☰
  </div>

</div>


    <div className="pl-10 lg:pt-20 grid grid-cols-2">


        <div className="w-[100%]">
        <p className="text-white font-bold text-xl lg:text-5xl pt-10">Taste of <span className="text-orange-600">Indian Food</span>  in <br />
        an Elgant Atmosphere
        </p>
        <p className="text-white lg:text-[12px] text-xs pt-5 text-justify w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore molestiae,
             iusto totam a assumenda veniam, modi vel cum similique in. Quas ratione aliquid, 
             expedita labore vero minima eaque. At. .</p>
                <a href="#menu"
                  className="lg:mt-20  text-xs inline-flex items-center justify-center text-white bg-orange-600 rounded-lg h-[30px] w-[150px] lg:h-[50px] lg:w-[200px] lg:text-xl" >
                  Exploring Our Menu
          </a>
    </div>
 </div>
</div>


{/* FEATURE SECTION */}
<div className="px-4 sm:px-8 lg:p-20 pt-10">

  {/* TOP CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* CARD 1 */}
    <div className="bg-[#F9E8DC] flex">
      <div className="flex items-center p-5">
        <div className="bg-[url(public/Images/canvas3.png)] bg-cover h-28 w-24"></div>
      </div>
      <div className="p-3">
        <p className="text-orange-500 text-xl md:text-2xl font-bold">Beverages</p>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi itaque debitis, consequatur numquam aut quibusdam.
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#F9E8DC] flex">
      <div className="flex items-center p-5">
        <div className="bg-[url(public/Images/canvas.png)] bg-cover h-28 w-24"></div>
      </div>
      <div className="p-3">
        <p className="text-orange-500 text-xl md:text-2xl font-bold">Main Dishes</p>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi itaque debitis, consequatur numquam aut quibusdam.
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#F9E8DC] flex">
      <div className="flex items-center p-5">
        <div className="bg-[url(public/Images/canvas1.png)] bg-cover h-28 w-24"></div>
      </div>
      <div className="p-3">
        <p className="text-orange-500 text-xl md:text-2xl font-bold">Snacks</p>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi itaque debitis, consequatur numquam aut quibusdam.
        </p>
      </div>
    </div>
  </div>

  {/* FEATURED RECIPE */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <div className="p-3">
      <p className="text-3xl md:text-4xl lg:text-5xl text-black font-bold">
        Featured <span className="text-orange-500">Recipe</span> <br />
        Selections
      </p>
    </div>

    <div className="flex items-center text-sm">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Magni unde in doloremque placeat. Nulla deleniti quasi quidem
        necessitatibus laudantium asperiores.
      </p>
    </div>
  </div>

  {/* IMAGE GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-6 gap-4">
    <div className="bg-[url(public/Images/2aut47ag_north-indian-food_625x300_28_March_25.jpg)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/b63q62p8_beetroot-veg-kofta_625x300_03_May_23.webp)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/feature-image-famous-dishes-of-delhi.jpg)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS.webp)] bg-cover h-40 sm:h-44 lg:h-48"></div>
    <div className="bg-[url(public/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-40 sm:h-44 lg:h-48"></div>
  </div>

</div>


{/* res 2 */}

    <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-2
    min-h-screen
  "
>
  {/* LEFT CONTENT */}
  <div
    className="
      px-4
      sm:px-8
      md:px-16
      lg:pl-[180px]
      pt-20
      md:pt-32
      lg:pt-52
    "
  >
    {/* ABOUT US LINE */}
    <div className="relative">
      <div className="bg-orange-500 w-10 h-[2px] absolute lg:mt-3"></div>
      <div className="text-black text-md font-semibold pl-14">
        About Us
      </div>
    </div>

    {/* HEADING */}
    <div className="lg:mt-8 md:mt-10 text-3xl md:text-4xl lg:text-5xl font-bold">
      <p>
        Exploring the Stories and <br />
        Aromas of{" "}
        <span className="text-orange-500">
          Ruchie Priya <br />
          kitchen
        </span>
      </p>
    </div>

    {/* DESCRIPTION */}
    <div>
      <p className="text-justify lg:mt-10 md:mt-8 text-sm md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Omnis exercitationem nemo, tempore, perferendis excepturi
        suscipit ipsa rerum libero doloremque architecto quidem
        repellendus nulla porro laudantium magni officiis deserunt
        odio nostrum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam quod non dicta dolor officiis
        dolorum quas deleniti aliquam mollitia consectetur.
      </p>
    </div>
  </div>

  {/* RIGHT IMAGE SECTION */}
  <div
    className="flex justify-center lg:justify-start relative lg:mt-10  
    "
  >
    {/* MAIN IMAGE */}
    <div
      className="bg-[url('public/Images/18FD-VEGAN-SIDES-TG-topart-group-clkb-superJumbo.webp')] bg-cover  w-[280px]
        h-[260px]
        sm:w-[400px]
        sm:h-[380px]
        md:w-[500px]
        md:h-[480px]
        lg:w-[630px]
        lg:h-[600px]
        lg:mt-32
        absolute
        z-10
      "
    ></div>

    {/* BACK COLOR BLOCK */}
    <div
      className="
        hidden
        lg:flex
        h-[500px]
        w-72
        mt-6
        absolute
        ml-[480px]
      "
      style={{ backgroundColor: "rgb(170, 120, 80)" }}
    ></div>
  </div>
</div>



{/* navigate your cuisine */}
<div className="flex items-center justify-center mt-32 md:mt-20 px-4 ">
  <p className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
    <span className="text-orange-500">Navigate</span> Your <br />
    Cusine Journey
  </p>
</div>

<div className="flex items-center justify-center mt-6 md:mt-8 text-center max-w-screen-md mx-auto px-4">
  <p className="text-sm tracking-wide">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis,
    culpa delectus quia iusto cumque repellendus dicta optio dolorum nam
    possimus molestias fugiat eligendi at. Deleniti corrupti quam sint
    veritatis. Inventore eaque, facere ab voluptatibus magnam ex perspiciatis
    esse. Possimus.
  </p>
</div>

{/* GRID */}
<div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    px-6
    sm:px-16
    lg:px-[270px]
    mt-10
    gap-10
  "
>
  {/* IMAGES */}
  <div className=" justify-center">
    <div className="bg-[url(public/Images/famous-indian-food-dishes-that-are-delicious-and-must-try-for-tourists.jpg)] bg-cover rounded-md h-[200px] w-80"></div>
     <div className="flex items-center justify-center mt-4">
    <div className="bg-gray-300 h-11 w-[290px] flex items-center justify-center">
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        Catering Services
      </p>
    </div>
  </div>

    <div className="text-sm max-w-72 mx-auto">
    <p className="text-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolores
      porro amet eos soluta consequuntur sapiente unde eligendi, dolorum ab
      alias laboriosam beatae quae pariatur ullam quia velit quis.
      Obcaecati.
    </p>
  </div>
  </div>





  <div className="justify-center">
    <div className="bg-[url(public/Images/2aut47ag_north-indian-food_625x300_28_March_25.jpg)] bg-cover h-[200px] rounded-md w-80"></div>
     <div className="flex items-center justify-center mt-4">
    <div className="bg-gray-300 h-11 w-[290px] flex items-center justify-center">
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        Dine in & TakeWay
      </p>
    </div>
  </div>


    <div className="text-sm max-w-72 mx-auto">
    <p className="text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
      voluptate quae incidunt? Maxime, exercitationem quam consequuntur ullam,
      veniam mollitia iste voluptas tenetur sed nam atque vero ad alias illum.
    </p>
  </div>
  </div>






  <div className="justify-center">
    <div className="bg-[url(public/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover rounded-md h-[200px] w-80"></div>
      <div className="flex items-center justify-center mt-4">
    <div className="bg-gray-300 h-11 w-[290px] flex items-center justify-center">
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        Veg & Non-Veg
      </p>
    </div>
  </div>
  <div className="text-sm max-w-72 mx-auto">
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      debitis laudantium odio! Laudantium natus reprehenderit incidunt quis,
      impedit officiis omnis repudiandae labore dolor quasi nemo inventore
      aperiam.
    </p>
  </div>
</div>
  </div>



{/* ================= MENU SECTION ================= */}
<div className="min-h-[320px] pt-10">
  <div className="flex justify-center items-center mt-12 sm:mt-16 md:mt-20">
    <div className="bg-orange-500 h-1 w-10"></div>
  </div>

  <div
    className="flex justify-center items-center mt-3 scroll-mt-20 text-sm md:text-base"
    id="menu"
  >
    OUR MENU
  </div>

  <div className="flex items-center justify-center mt-5 px-4">
    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
      Where Flavor <span className="text-orange-500"> Meet Innovation </span>
      - Your <br /> Ultimate Culinary Destination
    </p>
  </div>

  <div className="flex items-center justify-center mt-5 px-4">
    <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores
      pariatur minima deleniti perferendis sint placeat. Voluptas quis cupiditate
      ut laudantium eveniet aspernatur ipsum obcaecati alias ea hic, officia quos
      aliquid nam ab minus? Consequatur consequuntur exercitationem.
    </p>
  </div>
</div>

{/* ================= FILTER BUTTONS ================= */}
<section>
  <div
    className="
    placeholder-opacity-100
      flex
      flex-wrap
      justify-center
      pt-10
      pb-10
      sm:pb-20
      items-center
      gap-1
      sm:gap-6
      md:gap-10
      cursor-pointer
    "
  >
    <button onClick={showAll}
      className="bg-orange-600 flex items-center justify-center text-sm h-7 w-20 rounded text-white">
      View All
    </button>

    <button onClick={Food}
      className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">
      Food
    </button>

    <button onClick={Cart}
      className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">
      Cart
    </button>

    <button onClick={Snacks}
      className="border-orange-500 border-[2px] flex items-center justify-center text-sm h-7 w-20 rounded text-orange-500">
      Snacks
    </button>
  </div>

  {/* ================= MENU CARDS ================= */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
      px-6
      sm:px-16
      lg:px-36
    "
  >
    {datas.map((item) => (
      <div key={item.id} className="border-[2px] border-orange-500">
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

        <div className="text-orange-400 font-bold mx-4">
          {item.name}
        </div>
        <div className="text-[10px] mx-3 text-gray-500">
          {item.description}
        </div>
      </div>
    ))}
  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<div className="min-h-screen bg-orange-100 mt-20">
  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-5
      px-6
      sm:px-16
      lg:px-40
      gap-10
    "
  >
    {/* LEFT */}
    <div className="lg:col-span-2">
      {/* Section label */}
      <div className="flex items-center gap-2 mt-16">
        <div className="bg-orange-500 h-[1px] w-9"></div>
        <p className="text-sm uppercase tracking-wider text-gray-700">
          Why Choose Us
        </p>
      </div>

      {/* Title */}
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
        Discover Why Ruchi’s <br />
        Kitchen Is the <br />
        <span className="text-orange-500">Preferred Culinary Destination</span>
      </p>

      {/* Image + Caption */}
      <div className="mt-10 lg:mt-28">
        <div className="bg-[url(public/Images/chef.jpeg)] bg-cover bg-center h-[240px] rounded-lg shadow-md"></div>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Expert chefs, authentic recipes, and carefully sourced ingredients —
          crafted to deliver consistent quality and unforgettable taste.
        </p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="lg:col-span-3">
      {/* Decorative image */}
      <div className="bg-[url(public/Images/nds.webp)] bg-contain bg-no-repeat h-[320px] w-full max-w-[640px] "></div>

      <div className="max-w-[640px]">
        {/* Short intro */}
        <p className="text-sm  lg:mt-14 text-gray-600 lg:pl-7 leading-relaxed">
          We focus on quality, consistency, and customer satisfaction — blending
          traditional flavors with a modern dining experience.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 lg:pl-7 gap-8">
          <div>
            <p className="text-orange-500 font-semibold tracking-wide">
              BEST FOOD QUALITY
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Fresh ingredients prepared with precision and care.
            </p>
          </div>

          <div>
            <p className="text-orange-500 font-semibold tracking-wide">
              EXCEPTIONAL DINING
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Comfortable ambiance with warm, attentive service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ================= TESTIMONIAL ================= */}
<div className="flex justify-center mt-12">
  <div className="bg-orange-500 h-1 w-8"></div>
</div>

<p className="text-center mt-2 text-sm tracking-widest text-gray-600">
  OUR TESTIMONIAL
</p>

<p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 px-4">
  Exploring <span className="text-orange-500">Ruchi's</span> Kitchen Treasures
</p>

{/* TESTIMONIAL CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 gap-8 mt-14">
  {slider.slice(data, data + 2).map((item) => (
    <div
      key={item.id}
      className={`
        ${item.bg}
        rounded-xl
        p-6
        flex
        flex-col
        justify-between
        min-h-[220px]
        ${item.shadow ? "shadow-xl shadow-black/30" : ""}
      `}
    >
      {/* TEXT */}
      <p
        className={`${item.textColor} text-sm leading-relaxed line-clamp-4`}
      >
        {item.text}
      </p>

      {/* USER INFO */}
      <div className="flex justify-between items-center mt-6">
        <p className="font-semibold text-sm tracking-wide">
          {item.name}
        </p>
        <img
          src={item.Img}
          alt="rating"
          className="h-8 w-28 object-contain"
        />
      </div>
    </div>
  ))}
</div>

{/* CONTROLS */}
<div className="flex items-center justify-center mt-10 gap-4 mb-10">
  <button
    onClick={prev}
    className="border-orange-500 border-2 h-3 w-3 rounded-full"
  ></button>

  <button
    className="bg-orange-500 h-3 w-3 rounded-full"
  ></button>

  <button
    onClick={next}
    className="border-orange-500 border-2 h-3 w-3 rounded-full"
  ></button>
</div>


<section className="py-16 md:py-20 bg-white px-6 md:px-16 lg:px-32">
  {/* Heading */}
  <div className="text-center mb-12">
    <div className="flex justify-center">
      <p className="bg-orange-500 h-[3px] w-[35px]"></p>
    </div>

    <p className="tracking-widest text-base md:text-xl pt-6 md:pt-10">
      OUR POST
    </p>

    <h2 className="text-2xl md:text-4xl font-bold mt-2">
      Exploring <span className="text-orange-500">Ruchi's</span> Food Treasures
    </h2>
  </div>

  {/* Blog Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4">

    {/* CARD 1 */}
    <div className="h-96 hover:shadow-xl transition rounded">
      <div className="rounded-lg bg-[url(public/Images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160612-melon-roundup-recipes-01-0d22b9094f1348fcaa263d64817b2f8e.jpg)] bg-cover h-60">
        <div className="pt-60 px-2">
          <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
            Savor the Flavor: A Deep Dive Into Veg
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Explore the world of vibrant vegetarian dishes and hearty non-veg meals.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} /> August 3, 2025
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={16} /> 31
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="h-96 hover:shadow-xl transition rounded">
      <div className="bg-[url(public/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover h-60 rounded">
        <div className="pt-60 px-2">
          <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
            Quick and Delicious: 30-Minute Meals
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Need a meal fast but don’t want to compromise on taste?
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} /> August 23, 2025
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={16} /> 31
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="h-96 hover:shadow-xl transition rounded">
      <div className="bg-[url(public/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-60 rounded">
        <div className="pt-60 px-2">
          <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
            Catering Perfection: Tips for Events
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Planning an event? This blog is your go-to for stress-free catering.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} /> August 31, 2025
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={16} /> 31
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<section className="relative bg-white py-16 md:py-20 px-4 md:px-6">
  {/* HEADING */}
  <div className="flex justify-center items-center gap-5 flex-wrap mb-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      Available Many Place
    </h2>

    <div className="relative">
      <div className="w-7 h-7 md:w-8 md:h-8 bg-orange-400 rounded-md rotate-45 relative">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-teal-600 rounded-md absolute -right-2 -bottom-2"></div>
      </div>
    </div>
  </div>

  {/* SUBTITLE */}
  <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10 px-2 text-sm md:text-base leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut elit tellus, luctus nec ullamcorper mattis.
  </p>

  {/* MAP */}
  <div className="flex justify-center items-center relative h-[55vh] md:h-[80vh] lg:h-screen mx-2 md:mx-24">
    {/* Background map */}
    <div className="absolute inset-0 bg-[url('public/Images/vector-map-world-square-dots-260nw-1937582827.webp')] bg-cover bg-center opacity-60"></div>

    {/* Center text */}
    <p className="relative tracking-widest text-orange-500 font-bold text-sm md:text-base text-center">
      RUCHI KITCHEN
    </p>
  </div>
</section>




<footer className="relative">

  {/* SUBSCRIBE BOX */}
  <section className="w-full h-auto md:h-60 flex justify-center absolute z-10 px-4">
    <div className="bg-orange-100 w-full md:w-[70%] p-6 md:p-10 rounded-xl text-center">

      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
        Subscribe For Our <span className="text-orange-600">Exclusive</span> Information
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-96 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-orange-600 text-white px-5 py-2 rounded-md font-medium">
          Subscribe
        </button>
      </div>

    </div>
  </section>

</footer>


{/* FOOTER */}
<footer
  className="
    bg-orange-500 text-white w-full relative z-0
    mt-28
    px-6 sm:px-10 md:px-16 lg:px-28
    pt-24 sm:pt-28 md:pt-32
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-10
    "
  >
    {/* LOGO + DESCRIPTION */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 pt-10">Sofood</h2>
      <p className="text-white/90 text-sm leading-loose mb-6">
        We proudly present authentic dishes from various regions of the
        archipelago, bringing authentic flavors and Indonesian traditions to
        every dish we serve.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-4 pt-4">
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white text-orange-600">
          <a href="https://www.youtube.com/">
            <FaYoutube size={16} />
          </a>
        </div>

        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center">
          <a href="https://www.facebook.com/">
            <FaFacebookF size={16} />
          </a>
        </div>

        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center">
          <a href="https://www.instagram.com/">
            <FaInstagram size={16} />
          </a>
        </div>

        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center">
          <a href="https://in.linkedin.com/">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </div>

    {/* HELP CENTER */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Help Center</h3>
      <div className="w-40 h-0.5 bg-white mb-4"></div>
      <ul className="space-y-3 text-sm">
        <li>➤ Customer Support</li>
        <li>➤ Terms & Conditions</li>
        <li>➤ Privacy Policy</li>
      </ul>
    </div>

    {/* CONTACT INFO */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
      <div className="w-40 h-0.5 bg-white mb-4"></div>
      <ul className="space-y-3 text-sm">
        <li>📍 Emerald Street, South Tangerang, Indonesia</li>
        <li>📞 +26 123456789<br />+26 123456789</li>
        <li>✉ info@yoursite.com</li>
      </ul>
    </div>

    {/* OPENING HOURS */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
      <div className="w-40 h-0.5 bg-white mb-4"></div>
      <ul className="space-y-3 text-sm">
        <li>Mon - Tue : 08.00 AM - 09.00 PM</li>
        <li>Wed - Thu : 09.00 AM - 10.00 PM</li>
        <li>Fri - Sat : 08.00 AM - 12.00 PM</li>
        <li>Sunday : CLOSED</li>
      </ul>
    </div>
  </div>

  {/* FOOTER BOTTOM */}
  <div className="border-t border-white/30 mt-12 pt-4 text-center text-sm text-white/90">
    © Copyright CimnongStudio 2023. All right reserved.
  </div>
</footer>

        </>

    )
}