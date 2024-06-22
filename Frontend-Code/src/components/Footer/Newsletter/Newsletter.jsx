// import "./Newsletter.scss";
// import { FaSquareFacebook,FaTwitter,FaInstagramSquare,FaLinkedin } from "react-icons/fa6";
// const Newsletter = () => {
//     return <div className="w-[100%] h-[400px] flex bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('./assets/newsletter-bg.jpeg')` }}>
//         <div className="">

//             <div>
//             </div>
//             <FaSquareFacebook/></div>
//     </div>;
// };

// export default Newsletter;



import { FaSquareFacebook, FaTwitter, FaSquareInstagram  , FaLinkedin } from "react-icons/fa6";
import newsletter from'../../../assets/newsletter-bg.jpeg';

const Newsletter = () => {
  return (
    <div className="w-[100%] h-[400px]  bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${newsletter})`}}>
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 ">
        <h3 className="text-white  mb-4">Join Our Newsletter</h3>
        <h1 className="text-white text-center text-4xl mb-8">Sing Up Latest Update & Offers</h1>
        <div className="flex gap-2">
        <input className="w-[280px] h-[40px] outline-none text-[20px] rounded p-1 " type="tesxt"/>
        <button className="  w-20 rounded bg--500 bg-purple-600 outline-none">Search</button> </div>
        <div className="flex items-start space-x-3 mt-2 ">
         
          <FaSquareFacebook className="rounded w-[20px] h-[30px] cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-110" />
          <FaTwitter className="rounded w-[20px] h-[30px] cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-110 " />
          <FaLinkedin className="rounded w-[20px] h-[30px] cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-110"/>
        <FaSquareInstagram className="rounded w-[20px] h-[30px] cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-110 "/> 
        </div>
      </div>
      
    </div>
  );
};

export default Newsletter;
