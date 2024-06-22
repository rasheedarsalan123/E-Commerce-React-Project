
import { useContext } from 'react';
import watch from'../../../assets/products/watch-prod-3.webp';
import { MdOutlineClear } from "react-icons/md";
import { Context } from '../../../utils/Context';
const CartItem = () => {
    
    const {cardItem,handlearRemoveCard, handlearCardProduct} =useContext(Context)
    console.log(console.log('item',cardItem))
    return <div className=" flex h-[100%] w-[100%] item-start  flex-col " >
        {cardItem.map(item=>(
            
            <div key={item.id} className="flex px-10  w-[100%] space-x-3   ">
                
            <div className=" ">
            <img className="bg-gray-500 bg-opacity-30  w-[60px]" 
            src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" /> </div>
            <div className=""> <div className='flex items-center space-x-2'>
                <div className="flex items-center space-x-2 w-[200px] line-clamp-1 truncate">
                <span>{item.attributes.title}
                     </span> </div>
          <div>  <MdOutlineClear className=' cursor-pointer' onClick={()=>handlearRemoveCard(item) }/>
             </div>  </div>
            <div className="flex items-center ">
                        <span className="border-2 solid border-gray p-1 cursor-pointer"
                         onClick={()=>handlearCardProduct('dec',item)}>-</span>
                        <span className="border-2 solid border-gray p-1 ">{item.attributes.quantity}</span>
                        <span className="border-2 solid border-gray p-1 cursor-pointer"
                         onClick={()=>handlearCardProduct('inc',item)}>+</span>
                    </div>
                    <div className=" text-purple-500"> <span>{item.attributes.quantity}</span> 
                    <span>x</span>
                    <span>&#8377;{item.attributes.price*item.attributes.quantity}</span></div>
                    </div>
                    </div>
        ))}
    
             </div>
              
};

export default CartItem;
