import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
const Category= ({Textchang2}) => {
 const {id}=useParams();
 const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

console.log("categori",useFetch)

    return <div className=" "><div className="ml-[80px]"> <h1 className="text-[20px] mt-5 ">{Textchang2} </h1> </div>
        <div className=""><Products itemschang={true} products={data}/></div></div>;
};

export default Category;



