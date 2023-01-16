import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'


function SignUp() {

    const [usernameReg, setUernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameReg);
        window.location.href='http://localhost:3000/login'
    }





    async function registerfn(){

        let item={usernameReg,passwordReg}
        console.log(item)
      
      
        let result = await fetch("http://localhost:3001/register",{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
            "content-type": 'application/json',
            "Accept": 'application/json'
          }
        })
        result = await result.json()
        console.warn("result",result)
      
      }


  return(
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Register</h2>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              required
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
              value={usernameReg}
              onChange={(e) => setUernameReg(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark" onClick={registerfn}>
              Submit
            </button>
          </div>
          <div className="already">
            Already have account? <Link to='/'><h6 className="link">Login</h6></Link>
          </div>
        </div>
      </form>
    </div>
  )
}


export default SignUp;