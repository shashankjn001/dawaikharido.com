import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const callOrderPage = async () =>{
    try{
      const res = await fetch('/about', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json",
          "Authorization": localStorage.getItem("Authenticate")
        },
        credentials : "include"
      });
      const data = await res.json();
      console.log(data);
      setUserData(data)

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }


    }
    catch(err){
      console.log(err);
      navigate('/login')
    }
  }

  useEffect(()=>{
    callOrderPage();
  },[]);

  return (
    <div style={{ marginTop: "70px" }}>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Order</h2>
          <p></p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>201 Jai Jinendra Medical Store, Budhwaria, Ujjain</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>dawaikharido56@gmail.com<br />shailendrajn990@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bi-whatsapp"></i>
                  <h3>WhatsApp Us</h3>
                  <p>+91-9827390387<br />+91-8109014170</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form  method="POST" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" 
                  value={userData.name}
                  placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="text" className="form-control" name="email" id="email" 
                  value={userData.email}
                  placeholder="Your Mobile Number" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="address" id="address" 
                value={userData.address}
                placeholder="Address" required />
              </div>
              <div className="form-group">
              <label class="form-label" for="customFile">Upload your Prescription Here</label>
              <input type="file" class="form-control" id="customFile" accept="image/*" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="If you don't have Prescription type the medicine name here or Any messege you want to send type here" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your Order has been sent. Thank you!</div>
              </div>
              
              <div className="text-center" style={{marginTop:"10px"}}><button type="submit">Order</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  </div>
  )
}

export default Order
