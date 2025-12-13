export default function Gallerys(){
    return(
        <>
             <section>
            <div className="bg-[url(public/Images/pexels-chanwalrus-958545.jpg)] bg-cover bg-center h-[520px] ">
                <div className="px-32 pt-56">
                <div className=" text-white text-[70px]  font-serif font-semibold">Gallery</div>

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
            <div className=" grid grid-cols-2 h-[1100px] px-10 mt-10 gap-10">
                <div className=" grid row-span-4 py-10">
                    <div className="row-span-2 bg-[url(public/Images/istockphoto-1434531397-612x612.jpg)] bg-cover rounded-md"></div>
                    <div className="row-span-2 bg-[url(public/Images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160612-melon-roundup-recipes-01-0d22b9094f1348fcaa263d64817b2f8e.jpg)] bg-cover mt-10">2</div>
                </div>
                <div className="bg-[url(public/Images/213c8012b9827c35eb17cd9cb29d3563.jpg)] bg-cover col-span-1 row-span-4 my-10"></div>
            </div>
        </section>

        <section>
            <div className=" grid grid-cols-2 row-span-full h-[1100px] px-10 gap-10 ">
             <div className="row-span-8 bg-[url(public/Images/beef-rendang-1.jpg)] bg-cover"></div>  
             <div className="row-span-6 bg-[url(public/Images/gomoku-mixed-rice-cooked-clay-600nw-2344585305.webp)] bg-cover"></div> 
             <div className="row-span-8 bg-[url(public/Images/Mixed-Veg-Rice-Delight_-done.png)] bg-cover"></div>
             <div className="row-span-6 bg-[url(public/Images/360_F_698535008_ytN0Ei4AK1uQ4Zq6zFBeosCawCSbNNXM.jpg)] bg-cover"></div>
            </div>
        </section>
    
        
        </>
    )
}