import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const Allsellers = () => {
    const { data, isLoading } = useQuery(['showCategory'], () => {
        return axios.get('https://carreselling-server.vercel.app/allusers')
    },
        {
            refetchInterval: 2000
        }
    )
    if (isLoading) {
        <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    const filtered = data?.data.filter(seller => seller.role === 'seller')

    const handleVerify = (id) => {
        const bool = 'true'
        const verify = (bool === 'true')
        const body = {
            verify
        }
        fetch(`https://carreselling-server.vercel.app/verifyseller/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://carreselling-server.vercel.app/deleteseller/${id}`, {
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
                        <th>Verify</th>
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
                                {
                                    seller?.verify === true ? <td><button className="btn bg-green-500" disabled onClick={() => handleVerify(seller._id)}>Verify</button></td> :
                                        <td><button className="btn bg-green-500" onClick={() => handleVerify(seller._id)}>Verify</button></td>
                                }
                                <td><button className="btn bg-red-700" onClick={() => handleDelete(seller._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allsellers;