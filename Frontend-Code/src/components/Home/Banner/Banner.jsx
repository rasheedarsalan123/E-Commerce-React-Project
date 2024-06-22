import "./Banner.scss";
import bannerImg from '../../../assets/banner-img.png';
// const Banner = () => {
//     return (

//         <div className="relative items-center p-20 text-white p-40,0 bg-gradient-to-r from-purple-500 to-pink-500  ">
//             <div className="flex flex-col lg:flex-row md:flex-col  xs:flex-col xs:bg-yellow  h-[100% ] gap-20 sm:flex-col flex-col-reverse " >
//                 <div className="flex flex-col  items-center  ">
//                     <div className="flex  flex-col   ">  <h1 className=" text-[180px] ">Sales</h1>
//                         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minus? Unde eius, alias expedita cum illum sint ut! Harum quisquam delectus officia distinctio alias voluptate ab fugit ut. Vitae, neque?
//                         </p>
//                     </div>
//                     <div className="flex items-center"> <div> <button className="border-solid border-2 border-white p-2  w-40 m-2">Red More</button>

//                     </div>
//                         <div>

//                             <button className="border-solid border-2 border-white p-2  w-40 hover:bg-white hover:text-black"> Shop Now</button></div></div>
//                 </div>
//                 <img className="z-9 w-[600px] mb-[20px] sm:relative" src={bannerImg} alt="" ></img>
//             </div></div>);
// };

// export default Banner;

import React from 'react'

const Banner = () => {
  return (
    <section className=" flex items-center lg:flex-row md:flex-row   sm:flex-col flex-col-reverse  p-20 text-white p-40,0 bg-gradient-to-r from-purple-500 to-pink-500  ">
            <div className="flex flex-col   h-[100% ] gap-20 sm:flex-col  ">
        <div className="flex  flex-col   lg:flex sm:flex "> 
         <h1 className=" text-[80px] ">Sales</h1>
                        <p className=" flex-col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minus? Unde eius, alias expedita cum illum sint ut! Harum quisquam delectus officia distinctio alias voluptate ab fugit ut. Vitae, neque?
                        </p>
                    <div className=" flex">
                         <button className="border-solid border-2 border-white p-2  w-40 m-1 ">Red More</button>
                           <button className="border-solid border-2 border-white p-2  w-40 m-1 hover:bg-white hover:text-black"> Shop Now</button></div></div>
                </div>  
                <div className="flex sm:relative ">
                <img className="" src={bannerImg} alt="" />
            </div>
            </section>)
 
}

export default Banner
