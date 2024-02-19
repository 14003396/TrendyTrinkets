export default function ViewProducts({items})
{
return(
  <div className="container">
    <h3 className="seller-heading">Product Details</h3>
    <div className="form">
      <input className="inp" type="text" name="title" placeholder="Name" value={items.title} />
      <input className="inp" type="text" name="price" placeholder="Price" value={items.price} />
      <input className="inp" type="text" name="category" placeholder="category" value={items.category} />
      <input className="inp" type="text" name="image" placeholder="image" value={items.image}/>
      <button className="btn">Update Product</button>
    </div>
  </div>
)
}