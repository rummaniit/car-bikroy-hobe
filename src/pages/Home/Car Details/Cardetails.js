import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Modal/Modal';

const Cardetails = () => {
    const data = useLoaderData()
    console.log(data);
    const imageStyle = {
        width: '150px'
    }
    return (
        <div>
            <div>
                {
                    data?.map(category => <h1 className='text-5xl font-mono font-extrabold mt-16 mb-10 text-center text-orange-700'>{category.category_name}</h1>)
                }
            </div>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Cars Image</th>
                        <th>Cars Name</th>
                        <th>Cars Price</th>
                        <th>Seller Phone</th>
                        <th>Avaibility</th>
                        <th>Book Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(cars => cars.category_products.map(car => <tr>
                            <td><img src={car.p_image} style={imageStyle} alt="" /></td>
                            <td>{car.p_name}</td>
                            <td>{car.p_price_resel}</td>
                            <td>{car.seller_telephone}</td>
                            <td>{car.available ? <p className=' bg-green-700 py-2 text-center rounded-md'>Available Now</p> : <p className=' bg-red-700 py-2 text-center rounded-md'>Not Available Now</p>}</td>
                            <td>{car.available ? <label className='btn bg-blue-400 py-2  text-center rounded-md'
                                htmlFor="bookingModal"
                            >Book Now</label> :
                                <button className='btn bg-blue-400'

                                    disabled>Book Now</button>
                            }</td>
                        </tr>)

                        )
                    }
                </tbody>
                <Modal></Modal>
            </table >

        </div >

    );
};

export default Cardetails;