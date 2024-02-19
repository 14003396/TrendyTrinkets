import { Link,useNavigate } from "react-router-dom"
export default function AddProductHeader()
{
  const navigate = useNavigate();

  function handleHomebtn(){
    navigate('/slogin');
  }

  function handleViewProducts()
  {
    navigate('/sProducts');
  }
  return (
    <section>
      <div className="header">
      <img className="logo" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-design_23-2149718652.jpg?size=626&ext=jpg"/>
      <p onClick={handleViewProducts} className="view-products">View Your Products</p>
      <img onClick={handleHomebtn} className="logout" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-512.png"/>
      </div>
    </section>
  )
}