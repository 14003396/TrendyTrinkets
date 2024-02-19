import { useEffect, useState } from "react";
import SellerHeader from "./SellerHeader";
import AddProductHeader from "./AddProductHeader";
import Modal from "./ViewProduct";
import { Link } from "react-router-dom";

export default function SellerPoducts()
{

  let [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProducts(data)
        })
        
},[])
  return(
    <>
    <AddProductHeader/>
   
    <h1 className="products-heading">All your Products</h1>
    
    <div className="products-container">
    {
        products.map((product)=>{
          return (
            <div className="product-box" key={product.id}>
              <div className="image-wrapper">
               <img className="product-image" src={product.image} alt="product"/>
              </div>
              <h1 className="product-title">{product.title}</h1>
              <h2 className="product-price">{product.price}</h2>
              <div className="edit-options">
                {/* <img onClick={()=> setShowModal(true)} className="edit-btn" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-1024.png" alt="edit"/> */}
                <Link to={'/viewProduct/${d.id}'}>
                 <img className="edit-btn" src="https://cdn0.iconfinder.com/data/icons/zondicons/20/view-show-512.png" alt="delete"/>
                </Link>
                {/* {showModal && <Modal onClose={ () => setShowModal(false)}/>} */}
               </div>
            </div>
          )
        })
      }
    </div>
    
    </>
  ) 
}