"use client";
  import { useRouter } from "next/navigation";
  export default function Navbar(){
       const router=useRouter();
    return(
  <div>
   <div className="flex flex-row md:items-center px-30 md:py-10 py-5 border-b-gray-600 border-b-1  md:justify-between bg-black text-white  md:w-full ">
               
                <img className=" md:w-28 w-24 mr-8 " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
                <div className="md:flex flex-row hidden md:block font-bold text-lg px-8 space-x-10 bg-black ">
                  <div onClick={()=>router.push("/")} >Home</div>
                  <div onClick={()=>router.push("/")}>Pages</div>
                  <div onClick={()=>router.push("/menu")}>Menu</div>
                  <div onClick={()=>router.push("/blog")}>Blog</div>
                  <div onClick={()=>router.push("/cart")}>Shop</div>
                   <div onClick={()=>router.push("/contactus")}>ContactUs</div>
                  <img className="size-12 rounded-full mx-10  " src="https://tse1.mm.bing.net/th/id/OIP.JRBIv4WXa_jQW7MLYOe06wHaHa?pid=Api&P=0&h=180"onClick={()=>router.push("/cart")}/>
                  
                  </div>
                  <div className="md:hidden -ml-7 w-full text-right px-4">
  <select
    className="p-2 mt-2 rounded bg-white text-black"
    onChange={(e) => router.push(e.target.value)}
  >
    <option value="">Pages</option>
    <option value="/">Home</option>
    <option value="/aboutus">About Us</option>
    <option value="/chef">Chef</option>
    <option value="/menu">Menu</option>
    <option value="/cart">Shop</option>
    <option value="/blog">Blog</option>
    <option value="/contactus">Contact</option>
     <option value="/register">Register</option>
    <option value="/reservation">Reservation</option>
  </select>
</div>
                  <div className="border-2 border-white flex items-center justify-center w-70 h-14 text-lg font-bold  hover:bg-white hover:text-black transition hidden md:block"><h3 className="md:ml-18 md:mt-3">Reservation</h3></div>
            </div>
  </div>
    )
}