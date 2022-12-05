import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation } from 'react-router-dom';

const Modal = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log(data);
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



        // for fetching
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userInfo)
        // })

    }

    return (
        <div>

            {
                data.map(info => <form onSubmit={handleSubmit(onSubmit)} className="card w-96 mx-auto shadow-2xl bg-base-100">
                    <div className='card-body'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car name</span>
                            </label>
                            <input defaultValue={info.name} readOnly  {...register("carname", { required: true })} className="input input-bordered" />
                            <br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <input defaultValue={info.price} readOnly {...register("carprice", { required: true })} className="input input-bordered" />
                            <br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input defaultValue={info.email} readOnly type='email' {...register("email", { required: true })} className="input input-bordered" />
                            <br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Phone number</span>
                            </label>
                            <input defaultValue={info.telephone} readOnly type='telephone' className="input input-bordered" {...register("telephone", { required: true })} />
                            <br />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location of Meeting</span>
                            </label>
                            <input type='text' className="input input-bordered" {...register("location", { required: true })} />
                            <br />
                        </div>


                        <button className='btn btn-outline' type="submit">Book Now</button>
                    </div>
                </form>)
            }
        </div>
    );
};

export default Modal;