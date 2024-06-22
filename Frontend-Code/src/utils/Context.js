import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cardItem, setCardItem] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cardSubTotal, setCardSubTotal] = useState(0);
  const location =useLocation();
  useEffect((

  )=>{
   window.scrollTo(0,0)  
  },[location])
  useEffect(()=>{
    let count =0;
    cardItem.map((items)=> (count+=items.attributes.quantity));
    setCardCount(count)
let subtotal=0;
cardItem.map((items)=> (subtotal += items.attributes.price * items.attributes.quantity)

) 
setCardSubTotal(subtotal)
  },[cardItem])
  
  const handlearAddToCard = (product, quantity) => {
    let items = [...cardItem];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCardItem(items);
    // let items = [...cardItem];
    // let index = items?.findIndex((p) => p.id === product?.id);
    // if (index !== -1) {
    //     items[index].attributes.quantity += quantity;
    // } else {
    //     product.attributes.quantity = quantity;
    //     items = [...items, product];
    // }
    // setCardItem(items);
  }

  const handlearRemoveCard = (product) => {
    let items = [...cardItem];
    items = items?.filter((p) => p.id !== product?.id);
    setCardItem(items);
    // let items = [...cardItem];
    // items = items?.filter((p) => p.id !== product?.id);
    // setCardItem(items);
  }

  const handlearCardProduct = (type, product) => {
    let items = [...cardItem];
    let index = items?.findIndex((p) => p.id === product?.id);
    if(type==='inc') {
      items[index].attributes.quantity+=1;
    } else if( type='dec'){
      if( items[index].attributes.quantity===1) return;
      items[index].attributes.quantity-=1;
        
     
    } setCardItem(items);
    

  }

  return (
    <Context.Provider value={
      {
        categories,
        setCategories,
        products,
        setProducts,
        cardItem,
        setCardItem,
        cardCount,
        setCardCount,
        cardSubTotal,
        setCardSubTotal,
        handlearAddToCard,
        handlearRemoveCard,
        handlearCardProduct
      }
    }>
      {children}
    </Context.Provider>
  )
}

export default AppContext