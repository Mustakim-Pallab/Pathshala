import React from 'react';



const Searchbox = () => {
    return (
        <div>
            <div class="container w-50">
                <div>
                    
                    <div class="input-group mb-5">
                        <input type="text" class="form-control" placeholder="Search Any Course Here" aria-label="Course-name" aria-describedby="button-addon2" id="searchbox"/>
                        <button class="btn btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbox;