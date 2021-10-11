import React from 'react';
import pic1 from '../../Images/topbar image1.jpg'
import './HomeAbout.css'

const HomeAbout = () => {
    return (
        <div className="row  m-3 p-5 HomeAbout">
            <h1 className="d-flex justify-content-center mx-5">Here We Provide</h1>
            
            <div className="col-6">
                
                <p className="m-5 ">
                    We are a group of optimistic people who dream for an educated world. we believe in the borderless learning and are hospitality. Achieve degrees within the supervision of world class Teachers and universities. 

                </p>
                <button>
                    Learn More
                </button>


            </div>
            {/* <div className="col-1"></div> */}
            <div className="col-6">
                <img src={pic1} alt=""  className=" w-100 "/>
            </div>
            
        </div>
    );
};

export default HomeAbout