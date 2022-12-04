import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

const Register = () => {
    const { createUser, errors, setErrors } = useContext(Authcontext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault()
        const fullname = data.fullname
        const address = data.address
        const email = data.email
        const password = data.password
        const role = data.role
        const phone = data.telephone
        console.log(fullname, address, email, password, role, phone);


        // send to Database(collection user or seller)
        const userInfo = {
            fullname, address, email, password, role, phone
        }
        createUser(email, password)
            .then(result => {
                alert('Registration Successful')
                const user = result.user
                e.target.reset()
                console.log(user);
            }).catch(error => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage);
            })


        // for fetching
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userInfo)
        // })

    };
    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card w-96 mx-auto shadow-2xl bg-base-100">
                <div className='card-body'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register("fullname", { required: true, maxLength: 20 })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input {...register("address", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type='telephone' className="input input-bordered" {...register("telephone", { required: true })} />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Role</span>
                        </label>
                        <select className="input input-bordered" {...register("role", { required: true })}>
                            <option value="user">User</option>
                            <option value="seller">Seller</option>
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
                    <div>Already have an account? <Link className='text-blue-700' to='/login'>Login</Link></div>
                    {
                        errors ? <small className='text-red-700'>{setErrors}</small> : <small className='text-green-700'>Registration Successful</small>
                    }
                    <button className='btn btn-outline' type="submit">Submit</button>
                </div>
            </form>
        </div >

    );
};

export default Register;