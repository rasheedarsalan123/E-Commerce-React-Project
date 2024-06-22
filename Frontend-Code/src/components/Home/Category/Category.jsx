import "./Category.scss";


import {useNavigate } from'react-router-dom';
const Category = ({categories}) => {
    const navigate = useNavigate();
    console.log('cDat',categories?.data)
    return <div className=" flex justify-center items-center m-10  gap-5  ">
        {categories?.data && categories?.data.map((item)=>(
            <div key={item.id} className="w-[800px]" onClick={()=> navigate(`/category/${item.id}`)}>
        <img className="  rounded transition-all ease-in-out duration-300 transform hover:scale-110" 
        src={process.env.REACT_APP_URL+ item.attributes.img.data.attributes.url} alt="cat" />
        </div> 
        ))}
  
        
    </div>;
   
};

export default Category;
