import { useState } from "react";
import AddProductHeader from "./AddProductHeader";

export default function AddProduct()
{
  const [productDetails,setProductDetails]= useState({
    name:"",
    category:"",
    ogprice:"",
    ofprice:"",
    discount:"",
    img1url:"",
    img2url:"",
    img3url:"",
    description:""
  })
  function handleInput(event)
  {
    setProductDetails((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value};
      
    })
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(productDetails);
    alert(JSON.stringify("Product added successfully"));
  }

  return(
    <>
    <AddProductHeader/>
    <section className="container">

          <form className="form">
          <div className="seller-heading">
            <h3>Enter Product Details</h3>
          </div> 
            <input type="text" className="inp" required placeholder="Name" onChange={handleInput} name="name" value={productDetails.name}/>
            <input type="text" className="inp" required placeholder="Category" onChange={handleInput} name="category" value={productDetails.category}/>
            <input type="number" className="inp" required placeholder="Original Price" onChange={handleInput} name="ogprice" value={productDetails.ogprice}/>
            <input type="number" className="inp" required placeholder="Offer Price" onChange={handleInput} name="ofprice" value={productDetails.ofprice}/>
            <input type="text" className="inp" required placeholder="Discount" name="discount" onChange={handleInput} value={productDetails.discount}/>
            <input type="url" className="inp" required placeholder="Image One URL" name="img1url" onChange={handleInput} value={productDetails.img1url}/>
            <input type="url" className="inp" required placeholder="Image Two URL" name="img2url" onChange={handleInput} value={productDetails.img2url}/>
            <input type="url" className="inp" required placeholder="Image Three URL" name="img3url" onChange={handleInput} value={productDetails.img3url}/>
            <input type="text" className="inp inp-desc" required placeholder="Description" name="description" onChange={handleInput} value={productDetails.description}/>
            <button className="btn" onClick={handleSubmit}>Add Product</button>


        </form>

    </section>

    </>
  )
}