import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Blogs = () => {
    const { presentUser } = useContext(Authcontext)
    const { data, isLoading } = useQuery(['admin'], () => {
        return axios.get(`http://localhost:5000/allusers/byemail/?email=${presentUser.email}`)
    }, {
        refetchInterval: 2000
    })
    console.log(data?.data.role);
    if (isLoading) {
        return <>
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>
    }
    return (
        <div>
            <h1>Blogs</h1>

        </div>
    );
};

export default Blogs;