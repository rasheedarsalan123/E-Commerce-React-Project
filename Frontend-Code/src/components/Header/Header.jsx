import "./Header.scss";
import { useState,useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch ,FaShoppingCart,FaHeart} from "react-icons/fa";
import { Context } from "../../utils/Context";
import Search from'./Search/Search';
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from'../Cart/Cart';
// const {cardItem,handlearRemoveCard, handlearCardProduct} =useContext(Context)
const Header = () => {
const {cardCount}=useContext(Context);
const [scrolled,setScrolled]=useState(false);
const [showCart,setShowCart]=useState(false);
const [showSearch,setShowSearch]=useState(false);
const navigate = useNavigate();
const handlerScroll=()=>{
const offset =window.scrollY;
if(offset >200){
    setScrolled(true)
}else{
    setScrolled(false)
}
}
    useEffect(()=>{
        window.addEventListener('scroll',handlerScroll)
    },[])
    return <> <header className={`Main-header ${scrolled ? 'striky-header':''}`}>
        <div className="headre-contect  ">
            <ul className="flex items-center">
                <Link to="/">Home</Link>
                <li>About</li>
                <li>Categores</li>
            </ul>
            <div className="center" onClick={()=> navigate('/')}>GeeksVisor.</div>
            <div className="right ">
                <ul>
                   
            <FaSearch className="" onClick={()=>setShowSearch(true)}/>
        <FaHeart />
       <span className="Card-icon" onClick={()=>setShowCart(true)}><FaShoppingCart /> 
     {!!cardCount && <span >
        {cardCount}
       </span>}
       </span> </ul>
      <span className="lg:hidden sm:flex"><GiHamburgerMenu/> </span>
            </div>
        </div>
        
    </header>
 { showCart &&  <Cart setShowCart={setShowCart}/>}
{ showSearch&&<Search setShowSearch={setShowSearch}/> }
    </>
};

export default Header;
