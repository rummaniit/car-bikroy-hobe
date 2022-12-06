import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';
import Footer from '../../pages/Shared/Footer/Footer';
import Navbar from '../../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { presentUser } = useContext(Authcontext)
    const { data, isLoading } = useQuery(['roles'], () => {
        return axios.get(`http://localhost:5000/allusers/byemail?email=${presentUser.email}`)
    })
    if (isLoading) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    console.log(data?.data.role);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <label htmlFor="drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>


                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                        {
                            data?.data.role === 'admin' ? <>
                                <li><Link to='/dashboard/buyers'>All buyers</Link></li>
                                <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                            </> : data?.data.role === 'user' ? <>
                                <li><Link to='/dashboard/myorders'>My orders</Link></li>
                            </> : data?.data.role === 'seller' ? <>
                                <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </> : ''
                        }
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div >
    );
};

export default DashboardLayout;