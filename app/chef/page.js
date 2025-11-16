"use client";
import { useRouter } from "next/navigation";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Chef(){
    const router=useRouter();
    return(
        <div className=" bg-gray-100 dark:bg-gray-600">
       <div><Navbar/></div>
        <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover bg-contain bg-no-repeat md:bg-center text-white text-center py-60  ">
     
        <div className="md:absolute inset-0 md:bg-black/60"></div>

      
      <div className="relative z-10 md:-mt-40 -mt-45">
        <h1 className="md:text-5xl text-4xl font-bold font-[marcellus] ">Restaurant Chef</h1>
        <p className="text-lg md:mt-5 mt-3 font-semibold font-[lato]">
          Home <span className="text-gray-300">›</span> Chefs
        </p>
      </div>
    </div>

    <div className="bg-gray-100 dark:bg-zinc-800 py-20 md:mt-0 -mt-75">
  
  <div className="text-[#82704e] font-bold text-2xl md:mt-0 mt-10 text-center">

    <div className="bg-gray-100 dark:bg-zinc-800 py-20 font-[lato]">
  

    --- MASTER CHEFS ---
  </div>
  <div className="text-black dark:text-white font-bold text-4xl md:-mt-13 text-center mb-12 font-[marcellus]">
    MEET OUR SPECIAL CHEFS
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center px-10">
    
   
    <div className="relative flex flex-col items-center ">
      <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=640&q=75"
          alt="Chef"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
        <p className="text-xl font-[marcellus]">Alexander Petllo</p>
        <p className="text-sm font-normal tracking-wide">ASSISTANT CHEF</p>
      </div>
    </div>

    
    <div className="relative flex flex-col items-center">
      <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=640&q=75"
          alt="Chef"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
        <p className="text-xl font-[marcellus]">Mendia Juxef</p>
        <p className="text-sm font-normal tracking-wide">BURGER KING</p>
      </div>
    </div>

  
    <div className="relative flex flex-col items-center">
      <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=640&q=75"
          alt="Chef"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
        <p className="text-xl font-[marcellus]">John Carter</p>
        <p className="text-sm font-normal tracking-wide">HEAD CHEF</p>
      </div>
    </div>

   
    <div className="relative flex flex-col items-center">
      <div className="relative w-72 h-72 rounded-full border-[3px] border-[#7b6749] overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/f5/02/a1/f502a147d12bb4e51e11601dfea36d68.jpg"
          alt="Chef"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-35px] bg-[#7b6749] text-white px-10 py-3 text-center text-lg font-semibold clip-ribbon">
        <p className="text-xl">Elena Joseph</p>
        <p className="text-sm font-normal tracking-wide">PASTRY EXPERT</p>
      </div>
    </div>
  </div>
</div></div>

<div ><Footer/></div>




    </div>
    )
}