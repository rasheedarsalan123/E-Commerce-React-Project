import "./SingleProduct.scss";
import useFetch from "../../useFetch/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { FaShoppingCart, FaFacebook, FaTwitch, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Context } from "../../utils/Context";
const SingleProduct = () => {
    const { handlearAddToCard } = useContext(Context);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]= ${id}`);
    const [quantity, setQuantity] = useState(1)
    const increment = () => {
        setQuantity(prevState => prevState + 1)
    }
    const Decrement = () => {
        setQuantity(prevState => {
            if (prevState === 1) return (1)
            return prevState - 1

        })
    }
    if (!data) return;
    // const product = data.data[0].attributes;
    const product = data?.data?.[0]?.attributes;
    return <> <div className=" my-4 flex flex-col w-[100%]  items-center justify-center  ">
        <div className=" mx-12  space-x-5  flex flex-col   lg:flex-row md:flex-row   sm:flex-col   ">
            <div className="  ">
                <img className="bg-black bg-opacity-10 w-[500px]" src={process.env.REACT_APP_URL + product.img.data[0].attributes.url} alt="" />
            </div>
              <div className="  ">
                <h2 className="font-bold ">{product.title}
                </h2>
                <div><h4 className="text-[20px]">&#8377;{product.price}</h4>
                    <div className="w-[350px]">{product.desc}</div></div>
                <div className="flex space-x-5 mt-5 items-center">
                    <div className="">
                        <span className="border-2 solid border-gray p-2 cursor-pointer" onClick={Decrement}>-</span>
                        <span className="border-2 solid border-gray p-2 ">{quantity}</span>
                        <span className="border-2 solid border-gray p-2 cursor-pointer" onClick={increment}>+</span>
                    </div>
                    <div className="flex space-x-2 items-center bg-purple-600 text-white p-2"
                        onClick={() => { 
                            handlearAddToCard(data?.data?.[0],quantity);
                            setQuantity(1); 
                         }
                        }>
                        <FaShoppingCart />   <button> Add To Card</button> </div>


                </div>
                <div className="mt-5">Catagory:<span>{product.categories.data[0].attributes.title}</span>
                </div>
                <div className="mt-5  flex items-center">Share:<span className="flex space-x-2 pl-2">
                    <FaFacebook /><FaTwitch /><FaInstagram /><FaLinkedin /></span></div>

            </div>

        </div>
        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />

    </div>
    </>;
};

export default SingleProduct;


// import { useContext, useState } from "react";
// import { Context } from "../../utils/context";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import RelatedProducts from "./RelatedProducts/RelatedProducts";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaLinkedinIn,
//     FaPinterest,
//     FaCartPlus,
// } from "react-icons/fa";
// import "./SingleProduct.scss";

// const SingleProduct = () => {
//     const [quantity, setQuantity] = useState(1);
//     const { id } = useParams();
//     const { handleAddToCart } = useContext(Context);
//     const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

//     const decrement = () => {
//         setQuantity((prevState) => {
//             if (prevState === 1) return 1;
//             return prevState - 1;
//         });
//     };
//     const increment = () => {
//         setQuantity((prevState) => prevState + 1);
//     };

//     if (!data) return;
//     const product = data?.data?.[0]?.attributes;

//     return (
//         <div className="single-product-main-content">
//             <div className="layout">
//                 <div className="single-product-page">
//                     <div className="left">
//                         <img
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 product.image.data[0].attributes.url
//                             }
//                         />
//                     </div>
//                     <div className="right">
//                         <span className="name">{product.title}</span>
//                         <span className="price">&#8377;{product.price}</span>
//                         <span className="desc">{product.description}</span>

//                         <div className="cart-buttons">
//                             <div className="quantity-buttons">
//                                 <span onClick={decrement}>-</span>
//                                 <span>{quantity}</span>
//                                 <span onClick={increment}>+</span>
//                             </div>
//                             <button
//                                 className="add-to-cart-button"
//                                 onClick={() => {
//                                     handleAddToCart(data?.data?.[0], quantity);
//                                     setQuantity(1);
//                                 }}
//                             >
//                                 <FaCartPlus size={20} />
//                                 ADD TO CART
//                             </button>
//                         </div>

//                         <span className="divider" />
//                         <div className="info-item">
//                             <span className="text-bold">
//                                 Category:{" "}
//                                 <span>
//                                     {
//                                         product.categories.data[0].attributes
//                                             .title
//                                     }
//                                 </span>
//                             </span>
//                             <span className="text-bold">
//                                 Share:
//                                 <span className="social-icons">
//                                     <FaFacebookF size={16} />
//                                     <FaTwitter size={16} />
//                                     <FaInstagram size={16} />
//                                     <FaLinkedinIn size={16} />
//                                     <FaPinterest size={16} />
//                                 </span>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <RelatedProducts
//                     productId={id}
//                     categoryId={product.categories.data[0].id}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;