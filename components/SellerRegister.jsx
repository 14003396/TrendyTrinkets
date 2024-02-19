import { useState } from "react";
import SellerHeader from "./SellerHeader";
import { Link } from "react-router-dom";
export default function SellerRegister()
{

  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    number:"",
    gst:"",
    password:""
  })

  function handleInput(event)
  {
    setUserDetails((prevState)=>{
      return {...prevState,[event.target.name]:event.target.value};
    })
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(userDetails);
    alert(JSON.stringify("Registration successfull"));

   
  //   fetch("URL",{
  //     method:"POST",
  //     body:JSON.stringify(userDetails),
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     setMessage({type:"success",text:data.messge});
  //     // console.log(data);
  //     setUserDetails({
  //        name:"",
            // email:"",
            // number:"",
            // gst:"",
            // password:""
  //     })
  //     setTimeout(()=>{
  //       setMessage({type:"invisible-msg",text:"Dummy sg"});
  //     },5000)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  }
  return (
    <>
      <SellerHeader/>
      <section className="container">
        
        <form className="form">
          <div className="seller-heading">
            <h3>Enter Your details</h3>
          </div> 
            <input type="text" className="inp" required placeholder="Name" onChange={handleInput} name="name"/>
            <input type="email" className="inp" required placeholder="Email" onChange={handleInput} name="email" />
            <input type="text" className="inp"  required placeholder="Mobile Number" onChange={handleInput} name="mobile"/>
            <input type="text" className="inp" required placeholder="GST Number" onChange={handleInput} name="gst"/>
            <input type="password" className="inp" required placeholder="Password" onChange={handleInput} name="password"/>
            <button className="btn" onClick={handleSubmit}>Register</button>
            <p>Already Registered ? <Link to='/slogin'>Login</Link></p>
            


        </form>


      </section>
    
    </>
  )
}