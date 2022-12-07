// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import React from 'react';
import useTitle from '../../hooks/useTitle';
// import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='grid grid-cols-1 gap-3  mt-10 md:grid-cols-2'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.lussogear.com/__PUBLIC_LIGHT/assets/ellmA-kbb_4f0aa9ee-0afd-40ce-ad1a-923c97f336ef_large.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">CAR GURUS</h2>
                    <p>Even if you aren't into cars, you've probably heard of Kelley Blue Book. This company is perhaps one of the most recognized names in the industry.
                        However, you might not be aware of KBB's online presence. Users recognize its site as a comprehensive guide for buying and selling vehicles. Buyers and dealers alike trust this resource for their purchases.
                        If you are buying or selling a vehicle, KBB is your go-to. You can get all the information you need about your make and model. This will help ensure you are well-informed and get a fair price.</p>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.lussogear.com/__PUBLIC_LIGHT/assets/TWe7o-edmunds_5227d103-b10d-4a9f-900c-b15fa971db7e_large.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">EDMUNDS</h2>
                    <p>Yet another big name in the industry, Edmunds is a go-to if you're buying or selling. The company has really grown its online presence in the past few years. Users depend on its comparison guides to make sound buying decisions. So, if you're stuck between two vehicles, you can reference the site's model-by-model comparisons.
                        Experts advise that you check sites like these before buying a vehicle. This is one of the most dependable sources, meaning you can be assured you're getting a good deal.
                        On this blog, you'll also find a variety of other topics. Its writers cover everything from leasing advice to what to look for when purchasing an SUV.</p>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.lussogear.com/__PUBLIC_LIGHT/assets/ellmA-kbb_4f0aa9ee-0afd-40ce-ad1a-923c97f336ef_large.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">CAR GURUS</h2>
                    <p>Even if you aren't into cars, you've probably heard of Kelley Blue Book. This company is perhaps one of the most recognized names in the industry.
                        However, you might not be aware of KBB's online presence. Users recognize its site as a comprehensive guide for buying and selling vehicles. Buyers and dealers alike trust this resource for their purchases.
                        If you are buying or selling a vehicle, KBB is your go-to. You can get all the information you need about your make and model. This will help ensure you are well-informed and get a fair price.</p>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.lussogear.com/__PUBLIC_LIGHT/assets/ArHSx-car-and-driver_a09d78d7-b882-4ee5-8a72-6825c0c9c41b_large.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">CAR AND DRIVER</h2>
                    <p>This company is likely another one you've already heard. If it's online presence is new to you, then consider yourself lucky! You've just stumbled on a great source countless users depend on.
                        This blog showcases the year's newest vehicles. You can find information on your favorite models and thorough comparison guides.
                        The blog is also a great resource if you're looking to invest in instruments. Contributors thoroughly test different brands, allowing you to see which ones work best and are worth buying.</p>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.lussogear.com/__PUBLIC_LIGHT/assets/287me-motortrends_38151649-eb9e-46f6-935b-d8546b750122_large.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">MOTOR TRENDS</h2>
                    <p>Having been a well-known print magazine since 1949, Motor Trends has certainly made a name for itself. The company has since evolved to form an impressive digital presence.
                        Contributors discuss a wide range of topics to include the latest news on smart cars. They also feature opinion pieces that touch on lighter, more interesting topics such as the best auto movies of all time.
                        On Motor Trends, you'll also find high-quality videos. The production value is through the roof with the content being both informative and engaging.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;