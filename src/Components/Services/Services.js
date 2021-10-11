import React,{useState,useEffect} from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const[Services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    

    return (
        
        <main className=" container">
            <div className=" row">
                
                    {
                        
                        Services.map(service => 
                            
                            <Service service={service} key={service.name}></Service>
                            )
                    }
                
               
            </div>
        </main>
    );
};

export default Services;