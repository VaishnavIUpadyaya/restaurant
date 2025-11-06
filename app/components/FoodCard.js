"use client";

function FoodCard({foodimg,title,description,onBorrowClick,buttontext}){
    return (
         <div >
<div className="h-[500px] md:w-[400px] w-1/2 rounded-3xl  bg-white md:ml-[50px]">
    <img
    src={foodimg}
    alt={title}
    className="h-[300px] w-full   border-1 border-black"/>
    <h2 className="text-black text-2xl font-bold md:ml-[30px] ml-3 md:mt-[30px] mt-3">{title} </h2>
    <h3 className="text-gray-600 md:ml-[30px] ml-4 font-bold">{description}</h3>
    <div className=" md:ml-[30px] ml-4 mt-3 mt-[15px] relative z-10">
        <button className="bg-white hover:bg-[#4b2a14] text-black hover:text-white h-[50px] w-[320px] rounded-[30px] border-2 border-black flex items-center justify-center"onClick={onBorrowClick}>{buttontext}</button>
    </div>
     </div>
         </div>
    )
}
export default FoodCard;