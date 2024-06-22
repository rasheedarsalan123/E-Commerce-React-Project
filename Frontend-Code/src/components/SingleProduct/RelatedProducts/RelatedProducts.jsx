import Products from "../../Products/Products";
import useFetch from "../../../useFetch/useFetch";
const RelatedProducts = ({productId,categoryId}) => {
    const {data}=useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters [categories][id] = 
        ${categoryId}&pagination[start]=0&pagination[limit]=4`
    )
    return <div><div className="m-10"> <h1 className="text-[20px]">Related Product </h1> </div>
        <div><Products itemschang={true} products={data}/></div></div>
};

export default RelatedProducts;
