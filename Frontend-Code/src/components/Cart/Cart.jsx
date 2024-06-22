import "../Cart/CartItem/CartItem.css";
import { MdOutlineClear } from "react-icons/md";
import { TbShoppingCartCancel } from "react-icons/tb";
import CartItem from './CartItem/CartItem';
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { loadStripe } from '@stripe/stripe-js';
import { paymentMethod } from "../../utils/api";
const Cart = ({ setShowCart }) => {
   const { cardItem, cardSubTotal } = useContext(Context)
   const stripePromise = loadStripe(process.env.React_APP_STRIPE_PUBLISHABEL_KEY);
   const handlerPayment = async () => {
      try {
         const stripe = await stripePromise;

         const res = await paymentMethod.post("/api/orders", {
            products: cardItem,
            });
         console.log("res",res)


         await stripe.redirectToCheckout({
            sessionId: res?.data?.stripesession.id,
         })
      } catch (error) {
         console.log("res", error);
      }

   }

   
    
   return <div className=" fixed top-0 left-0 w-[100%] h-[100%] flex justify-end z-10  " >
      <div className=" bg-black bg-opacity-35 absolute w-[100%]  h-[100%]" ></div>
      <div className=" h-[100%]  bg-white flex relative z-1 flex-col   "
         style={{ animation: `SlideSearchwindo 0.5s forwards` }}>
         <div className="items-center justify-center flex px-8 border-b gap-5 border-black">
            <span className=" flex-grow justify-between text-[20px] font-light uppercase ">Shopping Cart</span>
            <span className=" cursor-pointer flex items-center uppercase hover:opacity-35 text-[13px] " onClick={() => setShowCart(false)} > <MdOutlineClear /><span>Closed</span></span>
         </div>
         {!cardItem.length && <div className="flex flex-col items-center justify-center mt-20 space-y-2">
            <TbShoppingCartCancel className=" w-[200px] h-[200px] opacity-10 text-gray-500" />
            <span>No Product In Tha Cart </span>
            <button className=" bg-purple-500 text-white p-2 rounded">Return To Shop</button>
         </div>}
         {!!cardItem.length && <>
            <CartItem />
            <div className=" border-t border-black  ">
               <div className="border-b mb-3 border-black p-5 flex justify-between ">
                  <span>SubTotal </span><span className="text-purple-600 hover:opacity-35">
                     &#8377;{cardSubTotal}</span></div>
               <div className="flex justify-center items-center h-[50px] w-[100%] mx-5 bg-purple-600 }
   
                rounded text-white cursor-pointer "><button className="" onClick={handlerPayment}>Checkout</button></div></div>
         </>}
      </div></div>;
};

export default Cart;
