import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    // const [errors, setError] = useState({});
  




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        // setError(validation(username))
        
        }
    
        const navigate = useNavigate()


    async function loginfn(){
      

        let items={username,password}
        console.log(items)
      fetch("http://localhost:3001/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password})
        }).then(function(response){
            return response.json()})
        .then(function(data){
          console.log(data);
          var v=JSON.stringify(data)
          console.log(v)
            if(data.auth === true){
              localStorage.setItem("token", data.token)
              localStorage.setItem("auth", data.auth)
              navigate("/dashboard");

            }
            else{
              // setErrorMessage("Wrong Username or Password....try again!")
              alert("wrong credentials....Try again")
              console.log("failed to login")
            }
          })




        }










  return(
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content" >
          <h2 className="Auth-form-title">Login</h2>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUername(e.target.value) }
            />
      
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
          
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                 setPassword(e.target.value)
                }
                 
            />
    
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark" onClick={loginfn}>
              Submit
            </button>
            {/* {console.log(errorMessage)} */}
            {/* {errorMessage && <div className="error"> {errorMessage} </div>} */}
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot password?
          </p>
          <div>
            Don't have account?  <Link to='/signup'><h6 className="link">Signup</h6></Link>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Login;