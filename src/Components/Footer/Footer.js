import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light body">

            
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11">
                        <div className="row pe-5">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 className="text-muted mb-md-0 mb-5 bold-text ">PATHSHALA&trade;</h3>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <li className="py-1"></li>
                                    <li className="py-1"><Link to="/" className="link">Home</Link></li>
                                    <li className="py-1"><Link to="/aboutus"  className="link">About Us</Link></li>
                                    <li className="py-1"><Link to="/services" className="link" >Services</Link></li>
                                    <li className="py-1"><Link to="/gallery"  className="link">Gallery</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5 "><b>ADDRESS</b></h6>
                                <p className=" p">605, Ratan Icon Building,<br /> Seawoods Sector, Headwood C/A, Austria</p>
                                
                            </div>
                        </div>
                        <div className="row pe-5">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">

                                <p className="social text-muted mb-0 pb-0 bold-text">
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faFacebookF} className='me-3' />
                                    </span>
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} className='me-3' />
                                    </span>
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faTwitter} className='me-3' />
                                    </span>
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faInstagram} className='me-3' />
                                    </span>
                                </p>

                                <small className="rights small"><span>&#174;</span> Team PATHSHALA. All Rights Reserved.</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 className="mt-55 mt-2 text-muted bold-text"><b>Team PATHSHALA</b></h6><small> <span><i
                                    className="fa fa-envelope small" aria-hidden="true"></i></span>pathshala@gmail.com</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 className="text-muted bold-text"><b>Mustakim Rahman </b></h6><small><span><i
                                    className="fa fa-envelope small" aria-hidden="true"></i></span> mustakimpallab2434@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;