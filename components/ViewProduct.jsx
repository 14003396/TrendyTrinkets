import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SellerHeader from "./SellerHeader";
import ViewProducts from "./ViewProducts";

export default function ViewProduct()
{

  const{prodId} = useParams();
  const[singleproduct1,setSingleProduct1] = useState([])
  console.log(prodId);
  useEffect(()=>{
    console.log(singleproduct1);
  })
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/${prodId}')
            .then((response)=>response.json())
            .then((data)=>{
              console.log(data);
              console.log(prodId);
              setSingleProduct1(data)
          
  },[])
  })
  return(
    <>
    <SellerHeader/>
    <ViewProducts items={singleproduct1}/>
    </>
  )
}