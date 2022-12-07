import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import useTitle from '../../hooks/useTitle';

const Allbuyers = () => {
    useTitle('All Buyers')
    const { data, isLoading } = useQuery(['showCategory'], () => {
        return axios.get('https://carreselling-server.vercel.app/allusers')
    }, {
        refetchInterval: 2000
    })
    if (isLoading) {
        <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const filtered = data?.data.filter(seller => seller.role === 'user')
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://carreselling-server.vercel.app/deletebuyer/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
            // body: JSON.stringify({ id })
        })
    }
    return (
        <div>
            <table className="table mt-10">

                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Adress</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered?.map((seller, i) =>
                            <tr>
                                <td>{seller.fullname}</td>
                                <td>{seller.address}</td>
                                <td>{seller.phone}</td>
                                <td><button className="btn bg-red-700" onClick={() => handleDelete(seller._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allbuyers;