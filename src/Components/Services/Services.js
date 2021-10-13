import React,{useState,useEffect} from 'react';
import './Services.css';
import Service from '../Service/Service';
import Searchbox from '../Searchbox/Searchbox';

const Services = () => {
    const[Services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    

    return (
        
        <main className="services m-4 ">
            <div className=" ">
            <h1 className="headline">
                Find The best Course and Enroll
            </h1>
            <p class="p">
                World Class Courses are in your Doorstep! 
            </p>
            <Searchbox></Searchbox>
            <div className=" row m-3">
                
                    {
                        
                        Services.map(service => 
                            
                            <Service service={service} key={service.name}></Service>
                            )
                    }
                
               
            </div>
            </div>
        </main>
    );
};

export default Services;