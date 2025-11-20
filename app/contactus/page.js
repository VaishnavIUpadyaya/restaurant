"use client";
import {useRouter}  from "next/navigation";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
export default function Contactus(){
    const router=useRouter();
    return(
        <div>
                <div className=" md:bg-gray-100 dark:bg-gray-600 dark:bg-black w-full">
                    <div><Navbar/></div>
                             <div className="relative bg-[url('https://i.pinimg.com/1200x/53/10/f2/5310f24f0f5ba2776ad6eb390fdd4fa9.jpg')] md:bg-cover md:bg-center bg-contain bg-no-repeat  text-white text-center md:py-60 py-50 ">
                       <div className="md:absolute md:inset-0 md:bg-black/60"></div>
         <div className="relative z-10 -mt-40">
        <h1 className="md:text-6xl text-4xl font-bold font-[marcellus] ">Contact Us</h1>
        <p className="text-lg mt-5 font-semibold">
          Home <span className="text-gray-300"></span> contact us
        </p>
      </div>
                </div>

        </div>
         <div className="flex flex-col  h-[500px]">
            <div className="  md:mt-[500px] mt-240  md:flex flex-row flex-col  md:mt-0 mt-5">
       <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl mt-[25px] ml-20 font-bold dark:text-white">Hotline</h2><h4 className="text-black md:ml-[110px] ml-20 dark:text-white">+4733378901 </h4></div> 
        <div> <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20 md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-20 font-bold dark:text-white">Our Location</h2><h4 className="text-gray-500 md:ml-[110px] ml-20 dark:text-white">55 Main Street,The <br></br>Grand Avenue 2nd Block,<br></br>New York City</h4></div> 
          <div>  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75"className="h-[90px] w-[100px] md:ml-[100px] ml-20  md:mt-0 mt-10"/><h2 className="flex flex-col text-black md:ml-[110px] text-2xl md:mt-[25px] mt-5 ml-20 font-bold dark:text-white">Official Email</h2><h4 className="text-black md:ml-[110px] ml-20 dark:text-white">info@restan.com </h4></div> 
          </div>
         <div>
          
         </div>
          </div>
          <div>
            <div className="text-[#82704e] font-bold font-[marcellus] text-2xl">
                KEEP IN TOUCH
            </div>
            <div className="font-bold text-5xl font-[lato]">Send us a Message</div>
            <form>
                <input type="text" placeholder=" Name" className="bg-gray-200 rounded-md p-3 mt-10 w-80 md:ml-0 ml-20 dark:bg-black dark:text-white text-gray-900"/><br></br>
                <input type="email" placeholder=" Email" className="bg-gray-200 rounded-md p-3 mt-10 w-80 md:ml-0 ml-20 dark:bg-black dark:text-white text-gray-900"/>
                <input type="text" placeholder=" Phno" className="bg-gray-200 rounded-md p-3 mt-10 w-80  md:ml-7 ml-20 dark:bg-black dark:text-white text-gray-900"/><br></br>
                <br></br>
                <input type="text" placeholder=" Your Message" className="bg-gray-200 rounded-md p-3 mt-10 w-80 h-32 md:ml-0 ml-20 dark:bg-black dark:text-white text-gray-900"/><br></br>
                <button className="bg-[#82704e] text-white font-bold px-6 py-3 mt-10 mb-20 rounded-md md:ml-0 ml-20 hover:bg-black font-[marcellus]">Get In Touch</button>

            </form>
          </div>
          <div className="text-gray-300 text-8xl md:mt-0 -mt-15 md:mx-30 dark:bg-black w-full">RESTAN</div>
          
           
            <div className="md:flex flex-row flex-col items-start md:justify-self-start relative ">
           
              <div ><Video/></div>
             
                </div>  
                <div className="md:mt-25"><About/></div>
                <div className="md:mt-32 mt-28"><Footer/></div>
                
          </div>
    )
}