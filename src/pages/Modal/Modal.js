import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthContext/AuthServices';
// import AuthServices from '../../Context/AuthContext/AuthServices';

const Modal = () => {
    const { presentUser } = useContext(Authcontext)
    const navigate = useNavigate()
    console.log(presentUser);
    const location = useLocation();
    const { data } = location.state;
    console.log(data);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault()
        const carname = data.carname
        const carprice = parseInt(data.carprice)
        const selleremail = data.email
        const location = data.location
        const sellerphone = data.telephone
        const image = data.image
        console.log(carname, carprice, selleremail, location, sellerphone, image);


        // send to Database(collection user or seller)
        const userInfo = {
            carname, carprice, selleremail, location, sellerphone, currentUser: presentUser?.email, image
        }

        fetch('https://carreselling-server.vercel.app/allbooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(res => {
            res.json()
            e.target.reset()
            alert('Your Item Is Booked')
            navigate('/dashboard/myproducts')
        })
            .then(data => {
                console.log(data);
            })

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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input defaultValue={info.image} readOnly type='text' className="input input-bordered" {...register("image", { required: true })} />
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