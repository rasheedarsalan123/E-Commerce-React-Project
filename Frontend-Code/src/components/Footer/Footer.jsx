import "./Footer.scss";
import { FaPhoneAlt,FaVoicemail ,FaLocationArrow} from "react-icons/fa";
import payments from'../../assets/payments.png';
const Footer = () => {
    return( 
    <footer className="w-[auto]   h-[auto]  sm: flex flex-col  sm:pt-10   ">
    <div className="flex   p-10 justify-between flex-wrap ">
        <div className="  flex flex-col gap-3  mt-5">
            <div className="text-[20px] ">
                About </div>
                <div className="flex  w-[300px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non alias illo in eum vitae officia impedit expedita iure ad numquam reiciendis et totam, molestias nihil provident, esse sequi exercitationem?
                    
                    </div>
        </div>
        <div className=" flex flex-col  gap-2 mt-5 ">
            <div className="text-[20px]  ">
                Contact   </div>
                <div className="flex items-center ">
                <FaPhoneAlt/>
                <div className="px-2"> 732623528572852
                </div>
                
                    </div>
                    <div className="flex items-center ">
                <FaVoicemail/>
                <div className="px-2"> Email : arsalanrasheed@gamil.com
                </div>
                
                    </div>
                    <div className="flex items-center ">
                <FaLocationArrow/>
                <div className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                </div>
                  
        </div>
        <div className="flex  justify-start w-[300px]">    
            <div className="flex flex-col gap-2 w-[100px] mt-5 ">
             <div className="text-[20px]  ">
            Catagory</div>
            <div>Catarores</div>
            <div>HeadPhones</div>
            <div>SmartPhone</div>
            <div>SmartPhone</div>
            <div>SmartPhone</div>
            <div>SmartPhone</div></div>
        <div className="flex flex-col gap-2 ml-10 w-[200px] mt-5">
            <div className="text-[20px] ">Pages</div>
            <span>Home</span>
            <span>Contect Us</span>
            <span> About</span>
            <span> Privicy-Police</span>
            <span> Terms & Condition</span>
            <span>Returns</span>
        </div>
     </div>
     </div>
     <div className="flex w-[100%] h-auto justify-center items-center border-t-2 border- gray"><img src={payments} alt="" /></div>
    </footer>)
};

export default Footer;
