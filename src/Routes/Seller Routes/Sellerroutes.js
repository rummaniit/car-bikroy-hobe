import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Sellerroutes = ({ children }) => {
    const { presentUser, loading } = useContext(Authcontext)
    const location = useLocation()
    const { data, isLoading } = useQuery(['admin'], () => {
        return axios.get(`https://carreselling-server.vercel.app/allusers/byemail/?email=${presentUser.email}`)
    }, {
        refetchInterval: 2000
    })
    // console.log(data);
    if (isLoading) {
        return <>
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>
    }
    if (loading) {
        return <>
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>
    }
    if (!presentUser && !data.role === 'seller') {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Sellerroutes;