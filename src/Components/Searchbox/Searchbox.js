import React from 'react';



const Searchbox = () => {
    return (
        <div>
            <div className="container w-50">
                <div>
                    
                    <div className="input-group mb-5">
                        <input type="text" className="form-control" placeholder="Search Any Course Here" aria-label="Course-name" aria-describedby="button-addon2" id="searchbox"/>
                        <button className="btn btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbox;