import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './HomeServices.css'

const HomeServices = () => {
    const[Services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    

    return (
        
        <main className=" container HomeServices">
            <h1 className=" h1">
            Get job-ready for an in-demand career
            </h1>
            <p className="p">Break into a new field like information technology or data science. No prior experience necessary to get started. Enroll now and get certificates. </p>
            <div className=" row">
                
                    {
                        
                        Services.slice(0,3).map(service => 
                            
                            <Service service={service} key={service.name}></Service>
                            )
                    }
                
               
            </div>
        </main>
    );
};


export default HomeServices;