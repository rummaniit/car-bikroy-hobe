import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';
import useTitle from '../../hooks/useTitle';

const Myorders = () => {
    useTitle('My orders')
    const navigate = useNavigate()
    const { presentUser } = useContext(Authcontext)
    const { data, isLoading } = useQuery(['myorders'], () => {
        return axios.get(`https://carreselling-server.vercel.app/allbooking/user?email=${presentUser?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
    })
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const imageStyle = {
        width: '130px'

    }
    const handlePayment = (id) => {
        navigate(`/dashboard/payment/${id}`)
    }
    // console.log(data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Car Name</th>
                            <th>Car Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.data.map(products => <tr>

                                <td ><img src={products.image} className='rounded-xl' style={imageStyle} alt="" /></td>
                                <td>{products.carname}</td>
                                <td>{products.carprice}</td>
                                <td><button className='btn bg-red-700'>Delete</button></td>
                                <td><button className='btn bg-blue-700' onClick={() => handlePayment(products._id)}>Pay</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;