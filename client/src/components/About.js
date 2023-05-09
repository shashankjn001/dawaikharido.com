import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  console.log(localStorage.getItem("Authenticate"))

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("Authenticate")
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    }
    catch (err) {
      console.log(err);
      navigate('/login')
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div style={{ marginTop: "9%" }}>
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">

          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">

                <h3 style={{ color: "#F45050" }}>dawaikharido.com</h3>
                <p>
                  यदि आप ब्लड प्रेशर, शुगर , हार्ट याअन्य कोई बीमारी के मरीज हैं जिसके लिए आप को नियमित रूप से दवाइयां खरीदना होती है ,जो कि आप M. R. P. से दवाइयां खरीदते हैं तो आपके शहर उज्जैन में दवाई खरीदो डॉट कॉम(dawaikharido.com) दवाइयों पर एमआरपी से 20 से 70% कम कीमत में दवाइयां उपलब्ध कराएगा वह भी आपको घर बैठे (Home delivery) तो जल्द ही आप नीचे दिए गए बटन पर क्लिक करे और तुरंत ऑर्डर करें और नियमित रूप से दवाइयों पर डिस्काउंट पाएं वह भी घर बैठे (Home delivery).
                  <br />
                  Flat 20-70% discount
                  <br />
                  Free Home delivery 🚚
                </p>
                <NavLink to="/order" className="about-btn"><span>Order</span> <i className="bx bx-chevron-right"></i></NavLink>

              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i className="bx bx-user"></i>
                    <h4>{userData.name}</h4>
                    {/* <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p> */}
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i className="bx bx-phone"></i>
                    <h4>{userData.phone}</h4>
                    {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p> */}
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i className="bx bx-map"></i>
                    <h4>{userData.address}</h4>
                    {/* <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p> */}
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <i className="bx bx-wallet-alt"></i>
                    <h4>You Saved</h4>
                    {/* <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p> */}
                  </div>
                </div>
              </div>{/* End .content*/}
            </div>
          </div>

        </div>
      </section>{/* End About Section */}
    </div>
  )
}

export default About
