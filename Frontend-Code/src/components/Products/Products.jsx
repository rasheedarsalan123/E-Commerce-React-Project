import "./Products.scss";
import Product from'./Product/Product';
const Products = ({products,itemschang,Textchang }) => {
    return <div className="m-10 ">{!itemschang&&<div className=" ">
        <h1 className="  text-[20px]"> {Textchang} </h1> </div>}
        <div className="ml-[50px] mb-5 border-b-2 border-purple-600 w-20"></div>
            <div className="flex  w-[100%] justify-center gap-4 lg:flex-row flex-wrap ">
              { products?.data && products?.data.map(item=>(
               <Product key={item.id}
                id={item.id}
                data={item.attributes}
               
                 />
            ))  }
            
        </div>
        
        </div>;
};

export default Products;
