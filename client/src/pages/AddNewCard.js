import React, { useState } from 'react';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const AddNewCard = () => {
    useDocTitle('MLD | Molad e Konsult - Send us a message')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setTitle('')
        setSubtitle('')
        setDescription('')
        setPrice('')
        setImgUrl('')
    }

    const submit = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        let fData = {
            title,
            subtitle,
            description,
            price,
            imgUrl
        };

        axios({
            method: "post",
            url: 'http://localhost:8181/cards',
            data: fData
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Create';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Create';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    }
    return (
        <>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form onSubmit={submit}>

                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Add new Card</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <div>
                                        <input 
                                            name="title" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Title" 
                                            value={title}
                                            onChange={(e)=> setTitle(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                                        }
                                    </div>
                                    
                                    <div>
                                        <input 
                                            name="last_name" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Subtitle"
                                            value={subtitle}
                                            onChange={(e)=> setSubtitle(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                                        }
                                    </div>

                                    <div>
                                        <input 
                                            name="imgUrl"
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Image data URL"
                                            value={imgUrl}
                                            onChange={(e)=> setImgUrl(e.target.value)}
                                            onKeyUp={clearErrors}   
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        }
                                    </div>

                                    <div className='w-full'>
                                        <span className='pr-2'>Price</span>
                                        <div className='flex justify-self-end'>
                                        <input
                                            name="price" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="number" 
                                            placeholder="Price*"
                                            value={price}
                                            onChange={(e)=> setPrice(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        </div>
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                        }
                                    </div>
                            </div>
                            <div className="my-4">
                                <textarea 
                                    name="description" 
                                    placeholder="description" 
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && 
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                }
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    Create
                                </button>
                            </div>
                    </div>
                    </form>
                            
                </div>
            </div>
            <Footer />
        </>


    )
}

export default AddNewCard;