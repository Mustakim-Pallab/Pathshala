import React from 'react';
import './Service.css'

const Service = (props) => {

    const{name,company,speciality,Cost}=props.service
    return (
        <div class="col-4">
            <div class=" m-4 ">
                <div class="card ">
                <img src={props.service.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    
                    <h5 class="card-text">{company}</h5> <br />
                    
                    <h4 class="card-cost">Enroll Only with ${Cost}</h4>
                    <h5 class="card-speciality">{speciality}</h5>

                    
                </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Service;