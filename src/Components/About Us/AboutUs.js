import React from 'react';
import pic1 from '../../Images/topbar image1.jpg'
import pic2 from '../../Images/graduation1.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="row  m-3 p-5 About1">
                <h1 className="d-flex justify-content-center mx-5">We Dream For An Educated World</h1>
                
                <div className="col-6">
                    
                    <p className="m-5 ">
                        We are a group of optimistic people who dream for an educated world. We believe in the borderless learning and hospitality. Achieve degrees within the supervision of world class Teachers and universities. <br /> <br /> Learn From the otherside of the World that requires No Visas, No Passport, No Travel fees! 

                    </p>
                    


                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-6">
                    <img src={pic1} alt=""  className=" w-100 "/>
                </div>
                
            </div>

            <div className="row  my-3 py-5 About2 ">
                <h1 className="d-flex justify-content-center mx-5 ">Achieve Degrees From all over the World</h1>
                <div className="col-1">

                </div>

                <div className="col-5">
                    <img src={pic2} alt=""  className=" w-100 "/>
                </div>
                
                <div className="col-6">
                    
                    <p className="mx-4 ">
                        We Provide degrees from the best universities of the world under the supervision of renowned professors. You have to complete exams, assignments and lectures with a minimum score of 70%. We provide shareable certificates that are as valuable as the certificates provide by those universities to their students physically. <br /> <br /> Learn From the otherside of the World that requires No Visas, No Passport, No Travel fees! 

                    </p>
                    


                </div>
                
                
                
            </div>
        </div>
    );
};

export default AboutUs;