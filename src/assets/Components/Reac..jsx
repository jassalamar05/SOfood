import { useState } from "react";

export default function Reac(){

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

    return(
            <>

     <div className="flex justify-center mt-5">
     <div className="bg-orange-500 h-1 w-8"></div>
    </div>
        <div className="text-center mt-2">OUR TESTIMONIAL</div>

        <p className="text-5xl font-bold text-center mt-6">Exploring <span className="text-orange-500"> Ruchi's</span> Kitchen Treasures</p>

        {/* slider */}



        <div>
              <div className="grid grid-cols-2 px-20 gap-10 mt-16">
                {slider.slice(data,data+2).map((item)=>(
                    <>
                    <div className="hover:scale-105 transition duration-300">
                    <div key={item.id}
                    className={`${item.bg} h-52 p-5 rounded      ${item.shadow ?"shadow-2xl shadow-black":""}`}>
                    <div className={item.textColor}>{item.text}</div>
                    <div>{item.shadow}</div>


                    <div className="flex justify-between items-center mx-5 mt-5">
                     <div className="font-semibold font-mono">{item.name}</div>
                    <img src={item.Img} className=" bg-contain h-10 w-32 " />
                   </div>
               </div>
         </div>
                 </>
                ))}
           
        </div>
        </div>

    <div className="flex items-center justify-center mt-10 gap-5 mb-10 ">
        <button onClick={prev}  className="border-orange-500 border-2 h-4 w-4 rounded-full"></button>
        <button className="bg-black border-2 h-4 w-4 rounded"></button>
        <button onClick={next} className="border-orange-500 border-2 h-4 w-4 rounded-full "></button>  
    </div>

        </>
    )
}