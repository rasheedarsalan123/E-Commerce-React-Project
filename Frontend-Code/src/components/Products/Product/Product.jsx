import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({id,data}) => {
    const navigate =useNavigate();
    return <div className="  rounded  "><div className="w-[280px]  mt-2  " onClick={()=>navigate('/product/'+id)}>
        <img  className="bg-black bg-opacity-10 h-[350px] transition-all ease-in-out duration-300 transform hover:scale-110"
        src={process.env.REACT_APP_URL + data.img.data[0].attributes.url} alt=""  />
        <div className="mt-2">
            <h2 className="font-bold">{data.title}
           </h2>
            <div><h4 className="text-[20px]">&#8377;{data.price}</h4></div>
            </div></div></div>;
};

export default Product;
