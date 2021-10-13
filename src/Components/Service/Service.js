import React from 'react';
import './Service.css'

const Service = (props) => {

    const{name,company,speciality,Cost}=props.service
    return (
        <div className="col-3">
            <div className=" mb-4 ">
                <div className="card ">
                <img src={props.service.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    
                    <h5 className="card-text">{company}</h5> <br />
                    
                    <h4 className="card-cost">Enroll Only with ${Cost}</h4>
                    <h5 className="card-speciality">{speciality}</h5>

                    
                </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Service;