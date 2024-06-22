import { useState,useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import React from 'react'

const useFetch = (endpoint) => {
    const [data,setData]=useState()
    useEffect(()=>{
        apicall()
    },[endpoint])
    const apicall= async()=>{
        const res= await fetchDataFromApi(endpoint)
        setData (res)
    }
 return {data}
 console.log('datasss',data)
}

export default useFetch