import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const Available = () => {
    const { data, isLoading } = useQuery(['showCategory'], () => {
        return axios.get('http://localhost:5000/allcars')
    })
    if (isLoading) {
        <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const imageSize = {
        width: '850px',
        // padding: '20px'
        height: '230px'
    }
    return (
        <>
            <h1 className="text-4xl font-bold font-mono mt-16 mb-10 text-center text-orange-700">Available Cars</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {
                    data?.data.map(category => category.category_products.map(cars => <>
                        {
                            cars.available ? <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={cars.p_image} style={imageSize} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{cars.p_name}</h2>
                                    <p>{cars.description}</p>
                                </div>
                            </div> : ''
                        }
                    </>))
                }
            </div>
        </>
    );
};

export default Available;