import  axios from "axios";
const params = {
    headers:{
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};
 export const fetchDataFromApi= async (url)=>{
  try {
    const {data} = await axios.get(process.env.REACT_APP_URL + url,params);
    console.log ("data",data)  
    return data ;
    
  } catch (error) {
    console.log(error)
    return error;
    
  }

 };
 export const paymentMethod = axios.create({
basUrl: process.env.REACT_APP_URL,
headers: {
  Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
}
})