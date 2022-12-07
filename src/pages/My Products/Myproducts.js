import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useContext } from 'react';
import { Authcontext } from '../../Context/AuthContext/AuthServices';
import useTitle from '../../hooks/useTitle';

const Myproducts = () => {
    useTitle('My Products')
    const { presentUser } = useContext(Authcontext)
    console.log(presentUser);
    const { data, isLoading } = useQuery(['myProducts'], () => {
        return axios.get(`https://carreselling-server.vercel.app/sellerproducts?email=${presentUser?.email}`)
    },
        {
            refetchInterval: 2000
        }
    )
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    const handleAvailable = (name) => {
        let verify = 'true'
        verify = (verify === 'true')
        let body = {
            verify
        }
        fetch(`https://carreselling-server.vercel.app/available/?name=${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('available')
                }
            })
    }

    const handleSold = (name) => {
        let verify = 'false'
        verify = (verify !== 'false')
        let body = {
            verify, name
        }
        fetch(`https://carreselling-server.vercel.app/soldout/?name=${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('sold out')
                }
            })
    }

    const handleDeletion = (name) => {
        console.log(name);
        const body = {
            name
        }
        fetch(`https://carreselling-server.vercel.app/deleteproduct/?name=${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('Deleted')
                }
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>

                        {/* <th>Product Image</th> */}
                        <th>Product Name</th>
                        {/* <th>Product Price</th> */}
                        <th>Avaibility</th>
                        <th>Sold Out</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data.map((pr, i) =>
                            <tr>

                                {/* <td><img src={pr.p_image} alt="" /></td> */}
                                <td>{pr.p_name}</td>
                                {/* <td>{pr.p_price_resel}</td> */}
                                <td><button className='btn btn-success'
                                    onClick={() => handleAvailable(pr.p_name)}
                                >Make Available</button></td>
                                <td><button className='btn btn-warning'
                                    onClick={() => handleSold(pr.p_name)}
                                >Make Sold Out</button></td>
                                <td><button className='btn bg-red-800'
                                    onClick={() => handleDeletion(pr.p_name)}
                                >Delete</button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myproducts;