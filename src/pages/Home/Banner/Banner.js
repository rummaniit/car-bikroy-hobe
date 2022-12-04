import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
// import { Link } from 'react-router-dom';
// import banner1 from '../../../Assets/banner1.webp'

const Banner = () => {
    return (
        <div className='back mt-6 p-10  md:p-64 lg:p-64' >
            <h1 className='text-2xl  font-mono top-24  text-orange-700 font-extrabold md:text-4xl'>Power And Beauty</h1>
            <p className='text-white font-bold hidden md:block'>We Know What you are. We know your value.Make the best choice with the best dealer and take the best car</p>
            <button className="btn btn-outline mt-4 text-orange-500">
                <Link to='/allcars'>Explore Our Cars</Link>
            </button>
        </div>
    );
};

export default Banner;