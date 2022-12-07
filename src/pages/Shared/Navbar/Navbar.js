import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Context/AuthContext/AuthServices';

const Navbar = () => {
    const { LogOut, presentUser } = useContext(Authcontext)
    const handleLogout = () => {
        LogOut().then(() => {

        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/allcars' className="justify-between">
                                    All Cars
                                </Link>

                            </li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                presentUser ? <><li><Link className="" to='/login' onClick={handleLogout}>Logout</Link></li>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                </> : <>
                                    <li><Link className="" to='/login'>Login</Link></li>
                                    <li><Link className="" to='/register'>Register</Link></li>
                                </>
                            }

                        </ul>

                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-4xl"><small className=' font-mono text-orange-700'>Car Bokroy Hobe</small></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={1}>
                            <Link to='/allcars'>
                                All Cars
                            </Link>
                        </li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            presentUser ? <><li><Link className="" to='/login' onClick={handleLogout}>Logout</Link></li>
                                <li><Link to='/dashboard/addproducts'>Dashboard</Link></li>
                            </> : <>
                                <li><Link className="" to='/login'>Login</Link></li>
                                <li><Link className="" to='/register'>Register</Link></li>
                            </>
                        }
                    </ul>

                </div>
                <label htmlFor='drawer' tabIndex={2} className="btn btn-ghost ml-32 md:ml-64 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;