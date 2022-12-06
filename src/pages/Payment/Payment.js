import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Payment = () => {
    const { presentUser } = useContext(Authcontext)
    const { data, isLoading } = useQuery(['myorders'], () => {
        return axios.get(`http://localhost:5000/allbooking/user?email=${presentUser?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
    })
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    return (
        <div>

        </div>
    );
};

export default Payment;