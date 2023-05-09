import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// import axios from 'axios';


const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email: "", phone: "", address: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }



  const postDataToServer = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, password, cpassword } = user;
    if (password !== cpassword && phone.length === 10) {
      window.alert("Please Fill the feild properly");
    }
    else {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, address, password, cpassword
        })
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Registration Failed!");
        console.log("Registration Failed");
      }
      else {
        window.alert("Registration Successful!");
        console.log("Registration Successful");
        navigate("/login");
      }
    }
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <section id="" className="">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Register</h2>
            <p></p>
          </div>
          <div className="col-lg-6 mx-auto">
            <form method="POST" className='was-validated'>

              <div className="form-outline mb-4">
                <input type="text" id="form2Example1" name="name" className="form-control" placeholder='Enter your Full Name'
                  value={user.name}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Enter Your Name.
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" name="email" id="form2Example1" className="form-control" placeholder='Enter your Email Address'
                  value={user.email}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Enter your Email.
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="phone" id="form2Example1" className="form-control" placeholder='Enter your Phone Number'
                  value={user.phone}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Enter your Phone Number.
                </div>
              </div>

              <div className="form-outline mb-4">
                <textarea type="text" name="address" id="form2Example1" className="form-control" placeholder='Enter your Full Address'
                  value={user.address}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Enter your Address.
                </div>
              </div>


              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" name="password" id="form2Example2" className="form-control" placeholder='password'
                  value={user.password}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Enter your Password.
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="password" name="cpassword" id="form2Example2" className="form-control" placeholder='conform password'
                  value={user.cpassword}
                  onChange={handleInputs}
                  required
                />
                <div class="invalid-feedback">
                  Please Conform Your Password.
                </div>
              </div>


              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                </div>


              </div>

              {/* Submit button */}
              <button type="button" onClick={postDataToServer} className="btn btn-danger btn-block mb-4" style={{ marginLeft: "40%" }}>Register </button>

              {/* Register buttons */}
              <div className="text-center">
                <p>already have an account? <NavLink to="/login">Sign In</NavLink></p>

              </div>
            </form>

          </div>

        </div>


      </section>
    </div>
  )
}

export default Register
