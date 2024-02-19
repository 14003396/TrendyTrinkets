import { useState } from "react";
import SellerHeader from "./SellerHeader";
import { Link,useNavigate } from "react-router-dom";

export default function SellerLogin()
{
  const navigate = useNavigate();
  const [userCreds,setUserCreds] = useState({
    email:"",
    password:""
  })

  function handleInput(event)
  {
    setUserCreds((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value}
    })
  }

  function handleSubmit()
  {
    if(userCreds.email=='seller'&&userCreds.password=='seller123')
    {
      navigate('/AddProduct');
    }
    else{
      alert("email/password is incorrect")
    }
  }

  return (
    <>
    <SellerHeader/>
    <section className="container">
      <form className="form">
          <div className="seller-heading">
            <h3>Enter Your details</h3>
          </div> 
            <input type="email" className="inp" required placeholder="Email" onChange={handleInput} name="email" value={userCreds.email}/>
            <input type="password" className="inp" required placeholder="Password" onChange={handleInput} name="password" value={userCreds.password}/>
            <button className="btn" onClick={handleSubmit}>Login</button>
            <p>Not Yet Registered ? <Link to="/sregister">SignUp</Link></p>


        </form>
    </section>
    </>
  )
}