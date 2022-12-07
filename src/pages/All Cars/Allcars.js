import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Allcars = () => {
    useTitle('All Cars')
    const { data, isLoading } = useQuery(['allcars'], () => {
        return axios.get('https://carreselling-server.vercel.app/allcars')
    }, {
        refetchInterval: 3000
    })
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const imageStyle = {
        width: '350px'
    }
    console.log(data?.data);
    return (
        <div className='grid grid-cols-1 mt-10 md:grid-cols-2 '>
            {
                data?.data.map(cars => cars.category_products.map(car => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={car.p_image} alt="Shoes" style={imageStyle} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{car.p_name}</h2>
                        <p>{car.description}</p>
                        <div className="card-actions">
                            <button className="bg-orange-600 p-4 font-mono text-xl font-bold">Seller Email: {car.seller_email}</button>
                            <button className="bg-orange-600 p-4 font-mono text-xl font-bold">Seller Telephonr: {car.seller_telephone}</button>
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default Allcars;