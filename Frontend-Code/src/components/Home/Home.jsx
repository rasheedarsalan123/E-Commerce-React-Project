import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from '../Products/Products';
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from '../../utils/api';
import { Context } from "../../utils/Context";

const Home = () => {

  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res)
      console.log(res)
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res)
      setProducts(res);
    });
  };


  return (
    <>
      <div className=''><Banner />
        <div className="">
          <Category categories={categories} Textchang2="Category Title" />
          <Products products={products} Textchang="populer product" />
        </div>
      </div>

    </>
  )

};

export default Home;
