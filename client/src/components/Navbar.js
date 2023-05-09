import React, { useState } from 'react'
import logoImg from '../assets/img/logo.png'
import { NavLink, useNavigate} from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(false)

    const clickOnMobileDrop = () => {
        setIsClicked(!isClicked)
    }
 
    const logout = () => {
        localStorage.removeItem("Authenticate")
        navigate("/")
    }

    return (

        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><NavLink to="/" className="logo me-auto"><img src={logoImg} alt="logo" /></NavLink></h1>

                    <nav id="navbar navbar-expand-lg" className={  isClicked ? "navbar order-last order-lg-0 navbar-mobile" : "navbar order-last order-lg-0"}>
                        <ul>
                            <li onClick={()=>clickOnMobileDrop()}><NavLink className="nav-link scrollto" to="/">Home</NavLink></li>
                            <li onClick={()=>clickOnMobileDrop()}><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                            <li onClick={()=>clickOnMobileDrop()}><NavLink className="nav-link scrollto" to="/order">Order</NavLink></li>
                            {!localStorage.getItem("Authenticate")?
                            <>
                            <li onClick={()=>clickOnMobileDrop()}><NavLink to="/login" class="get-started-btn scrollto">Login</NavLink></li>
                            <li onClick={()=>clickOnMobileDrop()}><NavLink to="/register" class="get-started-btn scrollto">Register</NavLink></li>
                            </>
                            :<>
                            <li class="get-started-btn scrollto" onClick={()=>logout()}>Logout</li>
                            </>
                            }
                            </ul>
                        <i onClick={()=>clickOnMobileDrop()} className="bi bi-list mobile-nav-toggle">
                        
                        </i>
                    </nav>


                </div>
            </header>

            
        </div>

    )
}

export default Navbar


