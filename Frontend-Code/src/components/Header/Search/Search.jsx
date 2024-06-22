import "./Search.css";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";
import useFetch from "../../../useFetch/useFetch";
import { FaSearch } from "react-icons/fa";
import watch from'../../../assets/products/watch-prod-3.webp';
import { useNavigate } from "react-router-dom";
const Search = ({setShowSearch}) => {
    const [query,setQuery]=useState('');
    const navigate = useNavigate('') 
    const onchang =(e)=>{
        setQuery(e.target.value)
    }
    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if(!query.length)
        {data = null}
    return <div className="  w-[100%] h-[100%] bg-white fixed z-10 top-0 left-0    " style={{animation:`SlideSearchwindo 0.5s forwards` }}>

        <div className="  w-[100%] flex justify-center  relative  space-x-3 items-center">
            <input className=" h-[55px] w-[100%] text-[40px] p-10 rounded-[20px]
              text-center transform-uppercase "
               type="text"
               autoFocus placeholder="Search For Product" 
               onChange={onchang} />
            <FaSearch  className=" cursor-pointer text-[20px]"/>
           <MdOutlineClear className=" cursor-pointer  text-[20px]"
            onClick={()=>setShowSearch(false) } />  </div> 
           {data?.data?.map((item)=>(
         <div key={item.id}onClick={()=>{navigate('/product/'+ item.id);
            setShowSearch(false)
         }
            
         } className=" flex  items-center justify-center  mb-[10px] overflow-hidden
          rounded-[10px] 
           h-[100px] space-x-3 ">
         <div className=" bg-gray-500  bg-opacity-10 items-center  flex space-x-3 w-[800px] 
         rounded-[10px] p-2">
        <div className=" ">
     <img className="  w-[100px]" src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" /> </div>
     <div className=" flex flex-col"> 
         <span><h1>{item.attributes.title}</h1></span>
         <span className="line-clamp-1 truncate w-[580px]"> {item.attributes.desc}</span>
          </div> </div>  </div>
    ))}
           </div>
          
        ;
};

export default Search;
