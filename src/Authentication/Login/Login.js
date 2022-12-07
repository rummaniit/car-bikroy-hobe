import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
    useTitle('Login')
    const { signIn, errors, setErrors, errorsCode, setErrorsCode } = useContext(Authcontext)
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    if (token) {
        navigate(from, { replace: true })
    }
    // const { data, isLoading } = useQuery(['loginRole'], () => {
    //     return axios.get('https://carreselling-server.vercel.app/allusers')
    // })
    // if (isLoading) {
    //     <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    // }
    // data?.data.map(rl => console.log(rl.role))
    const { register, handleSubmit } = useForm();

    const onSubmit = (info, e) => {
        e.preventDefault()
        // const fullname = info.fullname

        const email = info.email
        const password = info.password
        // const duty = info.duty
        // const filtered = data?.data.filter(pr => pr.email === email)
        // console.log(email, password, filtered);


        // // send to Database(collection user or seller)
        // const userInfo = {
        //     fullname, email, password
        // }

        // const roll = filtered.map(pr => pr.role)
        // console.log(roll[0]);

        // Sign In Function Firebase
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setLoginUserEmail(email)

                e.target.reset()
                alert('Login Successful')
                setErrors('')

            })
            .catch(error => {
                const errorCode = error.code
                setErrorsCode(errorCode)
                const errorMessage = error.message
                setErrors(errorMessage)
                console.log(errorCode, errorMessage);
            })
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-16 card w-96 mx-auto shadow-2xl bg-base-100">
                    <div className='card-body'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' {...register("email", { required: true })} className="input input-bordered" />
                            <br />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' className="input input-bordered" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/ })} />
                            <br />
                        </div>
                        <div>Don't have account? <Link className='text-blue-700' to='/register'>Register</Link></div>
                        {
                            errors ? <small className='text-red-700'>{errorsCode} {errors}</small> : ''
                        }
                        <button className='btn btn-outline' type="submit">Submit</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default Login;