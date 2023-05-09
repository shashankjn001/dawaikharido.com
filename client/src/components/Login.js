import React, {useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
// import LogoShort from '../assets/img/logo-small.png'
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const loginUser =async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email , password
      })
    });
    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credencials");
    }
    else{
      console.log(data,'data')
      localStorage.setItem("Authenticate", data.token)
      // window.alert("Login Successfull");
      navigate("/");
    }
  }

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="" className="">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Login</h2>
            <p></p>
          </div>



          <div className="col-lg-6 mx-auto">
            <form method='POST'>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Email'
                
                />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                placeholder='Password'

                />
                <label className="form-label" htmlFor="form2Example2">Password</label>
              </div>

              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                  </div>
                </div>

                <div className="col">
                  {/* Simple link */}
                  <NavLink to="/">Forgot password?</NavLink>
                </div>
              </div>

              {/* Submit button */}
              <button type="button" className="btn btn-danger btn-block mb-4" style={{ marginLeft: "40%" }} 
              onClick={loginUser}>Sign in</button>

              {/* Register buttons */}
              <div className="text-center">
                <p>Not a member? <NavLink to="/register">Register</NavLink></p>

              </div>
            </form>

          </div>

        </div>


      </section>
    </div>
  )
}

export default Login
