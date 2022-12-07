import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import Banner from './Banner/Banner';
import Chat from './Contact with Us/Chat';
import { useNavigate } from 'react-router-dom';
import Available from './Available Cars/Available';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    const navigate = useNavigate()
    const { data, isLoading } = useQuery(['showCategory'], () => {
        return axios.get('https://carreselling-server.vercel.app/allcars')
    },
        {
            refetchInterval: 3000
        })
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const handleNavigate = (id) => {
        navigate(`/car/${id}`)
    }
    return (
        <>
            <Banner></Banner>
            <h1 className="text-orange-700 text-mono text-bold text-4xl text-center mt-16 mb-10">Categories</h1>

            <div className='grid grid-cols-1 gap-4 text-center mt-10 md:grid-cols-2 p-4'>
                {
                    data?.data.map(category => <div className="card w-96 bg-neutral ">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold font-mono text-orange-500">
                                {category?.category_name}
                            </h2>
                            <p className='text-orange-700 text-xl font-bold'>Available Cars</p>
                            {
                                category?.category_products.map(cars => <ul>
                                    <li>{cars.p_name}</li>
                                </ul>)
                            }
                            <div className="card-actions justify-center">

                                <button className="btn btn-outline mt-6"
                                    onClick={() => handleNavigate(category._id)}>See all {category?.category_name} cars</button>

                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Available></Available>
            <Chat></Chat>

        </>
    );
};

export default Home;