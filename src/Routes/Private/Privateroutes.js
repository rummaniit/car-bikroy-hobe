import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Privateroutes = ({ children }) => {
    const { presentUser, loading } = useContext(Authcontext)
    const location = useLocation()
    if (loading) {
        return <>
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>
    }
    if (!presentUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Privateroutes;