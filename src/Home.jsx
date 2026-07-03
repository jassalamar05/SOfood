import { Link } from "react-router-dom";

export default function H(){
    return(
        <>
<div className=" bg-[url('/Images/p.jpg')] bg-cover w-screen h-screen">
    <div className="bg-black h-24 flex  items-center justify-between bg-opacity-30">
        <div className="text-3xl font-extrabold text-white">F O O D C O U R T</div>
        <div className="flex items-center justify-center">

        <ul className=" flex items-center justify-center gap-20 cursor-pointer">
            <a to={"/"} className="text-white font-bold">Home</a>
            <a to={"/menu"} className="text-white font-bold">Menu</a>
            <a to={"/blogs"}  className="text-white font-bold">Blog</a >
            <a to={"/contact"} className="text-white font-bold">Contact</a>
            <li className="text-white font-bold">Catering</li>
            <button className="bg-orange-600 text-white w-24 h-8 rounded-lg hover:scale-110 transition-transform duration-200 animate-pulset flex items-center justify-center gap-2">
                 <i class="fi fi-rr-phone-call"></i>
                 Call Us
                 </button> 
        </ul>
     </div>
   
    </div>

    <div className="pl-10 pt-20 grid grid-cols-2">


        <div className="w-[100%]">
        <p className="text-white font-bold text-6xl">Taste of <span className="text-orange-600">Indian Food</span>  in <br />
        an Elgant Atmosphere
        </p>

        <p className="text-white text-[12px] pt-5 text-justify w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore molestiae,
             iusto totam a assumenda veniam, modi vel cum similique in. Quas ratione aliquid, 
             expedita labore vero minima eaque. At. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis ipsum,
              eaque porro neque nostrum illum repellendus accusamus quasi non quibusdam nihil earum, assumenda sint exercitationem aspernatur eum officiis 
              architecto.</p>

              {/* <button className="mt-20 text-white bg-orange-600 rounded-lg h-[40px] w-[200px]">
                <a href="/menu"></a>
                Exploring Our Menu</button> */}


                <a href="#menu"
                  className="mt-20 inline-flex items-center justify-center text-white bg-orange-600 rounded-lg h-[40px] w-[200px]" >
                  Exploring Our Menu
                </a>

    </div>
 </div>
</div>
        
        
        </>
    )
}