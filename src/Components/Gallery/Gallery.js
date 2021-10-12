import React from 'react';
import pic1 from '../../Images/galary1.jpg'
import pic2 from '../../Images/galary2.jpg'
import pic3 from '../../Images/galary3.jpg'
import pic4 from '../../Images/galary4.jpg'
import pic5 from '../../Images/galary5.jpg'
import pic6 from '../../Images/galary6.jpg'
import pic7 from '../../Images/galary7.jpg'
import pic8 from '../../Images/galary8.jpg'
import pic9 from '../../Images/galary9.jpg'
import pic10 from '../../Images/galary10.jpg'
import pic11 from '../../Images/galary11.jpg'
import pic12 from '../../Images/galary12.jpg'
import pic13 from '../../Images/galary13.jpg'
import pic14 from '../../Images/graduation1.jpg'
import pic15 from '../../Images/graduation2.jpg'
import pic16 from '../../Images/laptop1.jpg'
import pic17 from '../../Images/topbar image1.jpg'
import pic18 from '../../Images/topbar image2.jpg'
import pic19 from '../../Images/topbar image3.jpg'
import pic20 from '../../Images/topbar image4.jpg'

import './Gallerry.css'

const Gallery = () => {
    return (
        <div className="gallery">
            <h1>
                Gallery
            </h1>
            <div className="m-5 row">
                <div className="col-3 imgdiv"><img src={pic1} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic2} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic3} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic4} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic5} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic6} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic7} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic8} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic9} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic10} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic11} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic12} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic13} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic14} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic15} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic16} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic17} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic18} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic19} alt="" className="w-100 img m-3 h-100" /></div>
                <div className="col-3 imgdiv"><img src={pic20} alt="" className="w-100 img m-3 h-100" /></div>
                
            </div>
        </div>
    );
};

export default Gallery;