
import React from 'react';
import logo from '../../Images/logo.PNG' 
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <section className="topbar row "> 
            <div className="col-10">
            <p className="container mx-5 mt-4 mb-0">Have any question? +8801521257203</p>
            </div>

            <div className="col-2">
                <ul className="row">
                    <li className="nav-item nav col-6 mt-3">
                        <a className="nav-link active" aria-current="page" href="/#">Register</a>
                    </li>
                    <li className="nav-item nav col-4 mt-3">
                        <a className="nav-link active" aria-current="page" href="/#">Login</a>
                    </li>
                        
                </ul>
            </div>
            

            </section>
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <div className="container">
                    <a className="navbar-brand" href="/#">
                    <img src={logo} alt="logo" className="" ></img>
                    </a>
                
                    <button className="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon nav-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-item">
                        <li className="nav-item nav mx-2 mt-2">
                        <a className=" " aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item nav mx-2 mt-2">
                        <a className=" " aria-current="page" href="/#">About Us</a>
                        </li>
                        <li className="nav-item nav mx-2 mt-2">
                        <a className=" " aria-current="page" href="/#">Services</a>
                        </li>
                        <li className="nav-item nav mx-2 mt-2">
                        <a className=" " aria-current="page" href="/#">Others</a>
                        </li>
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>




{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="/#" class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

            

        </div>
    );
};

export default Navbar;