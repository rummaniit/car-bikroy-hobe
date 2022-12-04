import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Login = () => {
    const { signIn, errors, setErrors, errorsCode, setErrorsCode } = useContext(Authcontext)
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/'
    const onSubmit = (data, e) => {
        e.preventDefault()
        const fullname = data.fullname

        const email = data.email
        const password = data.password

        console.log(email, password);


        // send to Database(collection user or seller)
        const userInfo = {
            fullname, email, password
        }
        // Sign In Function Firebase
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                e.target.reset()
                alert('Login Successful')
                setErrors('')
                navigate(from, { replace: true })
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
                                <span className="label-text">User Role</span>
                            </label>
                            <select className="input input-bordered" {...register("role", { required: true })}>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                                <option value="admin">Admin</option>
                            </select>
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