import { CalendarDays, MessageSquare } from "lucide-react";

export default function Ruch3(){
    return (
        <>

    <section className="py-20 bg-white px-32">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center">
              <p className="bg-orange-500 h-[3px] w-[35px]"></p>
        </div>
        <p className="tracking-widest text-xl pt-10">OUR POST</p>

        <h2 className="text-4xl font-bold mt-2">
          Exploring <span className="text-orange-500">Ruchi's</span> Food Treasures
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-3 gap-8 px-4  ">
        {/* Card 1 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className=" rounded-lg bg-[url(public/Images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__06__20160612-melon-roundup-recipes-01-0d22b9094f1348fcaa263d64817b2f8e.jpg)] bg-cover h-60">
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Savor the Flavor: A Deep Dive Into Veg 
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Explore the world of vibrant vegetarian dishes and hearty non-veg meals.
              This blog uncovers the secrets behind traditional
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 3, 2025
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Card 2 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className="bg-[url(public/Images/Grilled-Flat-Beans-with-Agrodolce-FT-RECIPE0723-8c80c70e11734e9a8e113a2bfb40153d.jpg)] bg-cover h-60 rounded">
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Quick and Delicious: 30-Minute Meals for Busy Days
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Need a meal fast but dont want to compromise on taste?
              This blog presents easy recipes for both veg and non-veg options...
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 23, 2025
              </div>

              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
              </div>
            </div>
          </div>
        </div>
    </div>
        {/* Card 3 */}
        <div className="h-96 hover:shadow-xl transition rounded">
        <div className="bg-[url(public/Images/istockphoto-104704117-612x612.jpg)] bg-cover h-60 rounded ">
          <div className="pt-60">
            <h3 className="text-orange-500 font-semibold text-md mb-2 pt-4">
              Catering Perfection: Tips and Recipes for Your Event
            </h3>

            <p className="text-gray-600 text-sm mb-4 ">
              Planning an event? This blog is your go-to for stress-free catering,
              mouthwatering recipes, and tips to impress  guests...
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                August 31, 2025
              </div>

              <div className="flex items-center gap-1">
                <MessageSquare size={16} />
                31
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