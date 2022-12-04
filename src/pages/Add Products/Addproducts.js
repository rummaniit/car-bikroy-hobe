import React from 'react';
import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
import { Authcontext } from '../../Context/AuthContext/AuthServices';

import { useForm } from 'react-hook-form';

const Addproducts = () => {
    const { presentUser } = useContext(Authcontext)

    const { register, handleSubmit } = useForm();
    const onSubmit = (info, e) => {
        e.preventDefault()
        const category_name = info.category_name
        const p_name = info.Product_Name
        const p_price_original = parseInt(info.Product_Original_Price)
        const p_price_resel = parseInt(info.Product_Resell_Price)
        const p_seat = info.Car_Seat_No
        const p_body_color = info.Car_Body_color
        const year_of_user = info.Year_of_use
        const description = info.Description
        const p_image = info.Image
        const seller_email = info.email
        const seller_telephone = info.telephone
        // const serial = info.serial

        const category_products =
            [
                {
                    p_name, p_price_original, p_price_resel, p_seat, p_body_color, year_of_user
                    , description, p_image, seller_email, seller_telephone
                }
            ]

        const productInfo = {
            category_name, category_products
        }
        // send to infobase(collection user or seller)
        fetch('http://localhost:5000/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        }).then(() => {
            alert('Product Added')
            e.target.reset()
        })
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card w-96 mx-auto shadow-2xl bg-base-100">
                <div className='card-body'>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Catergory Name</span>
                        </label>
                        <input {...register("category_name", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <input {...register("Product_Name", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Original Price</span>
                        </label>
                        <input {...register("Product_Original_Price", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Resell Price</span>
                        </label>
                        <input {...register("Product_Resell_Price", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seat No.</span>
                        </label>
                        <input {...register("Car_Seat_No", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Body Color</span>
                        </label>
                        <input {...register("Car_Body_color", { required: true })} className="input input-bordered" />
                        <br />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Year of Use</span>
                        </label>
                        <input type='number' className="input input-bordered" {...register("Year_of_use", { required: true })} />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Description</span>
                        </label>
                        <input type='text' className="input input-bordered" {...register("Description", { required: true })} />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type='text' className="input input-bordered" {...register("Image", { required: true })} />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type='email' defaultValue={presentUser?.email} readOnly {...register("email", { required: true })} className="input input-bordered" />
                        <br />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type='telephone' className="input input-bordered" {...register("telephone", { required: true })} />
                        <br />
                    </div>

                    <button className='btn btn-outline' type="submit">Submit</button>
                </div>
            </form>
        </div >
    );
};


export default Addproducts;