import { BrowserRouter,Routes ,Route } from "react-router-dom"; 

import Header from'./components/Header/Header';
import Footer from'./components/Footer/Footer';
import Category  from'./components/Category/Category';
import SingleProduct from'./components/SingleProduct/SingleProduct';
import Home from'./components/Home/Home';
import Newsletter from'./components/Footer/Newsletter/Newsletter';
import AppContext from "./utils/Context";

function App() {
    return (
        <BrowserRouter>
        <AppContext>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/Product/:id" element={<SingleProduct/>}/>
            {/* <Route path="/" element={}/> */}
        </Routes>
        <Newsletter/>
        <Footer/>
        </AppContext>
        </BrowserRouter>

    )
}

export default App;
