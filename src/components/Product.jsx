import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addtocart, productthunk } from '../redux/product.slice';

function Product() {

    const { products } = useSelector(state => state.productslice);
    const dispatch = useDispatch()
    console.log(products);
    function handleaddtocart(res) {
        dispatch(addtocart(res))
    }


    useEffect(() => {
        dispatch(productthunk())
    }, [])





    // console.log(addedproducts);




    return (
        <div>
            <main className="flex-grow pt-16">
                <section className="relative bg-gray-900 overflow-hidden flex justify-center items-center text-gray-100">
                    <div className="max-w-8xl mx-auto">
                        {" "}
                        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                {" "}
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        {" "}
                                        <span className="block">Discover Timeless</span>
                                        <span className="block text-custom">Artificial Jewelry</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        {" "}
                                        Explore our curated collection of stunning artificial jewelry
                                        pieces that combine elegance with affordability.
                                    </p>{" "}
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            {" "}
                                            <a
                                                href="#"
                                                className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-custom/90 md:py-4 md:text-lg md:px-10"
                                            >
                                                {" "}
                                                Shop Now
                                            </a>
                                        </div>{" "}
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a
                                                href="#"
                                                className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-custom text-base font-medium text-custom bg-transparent hover:bg-custom/10 md:py-4 md:text-lg md:px-10"
                                            >
                                                {" "}
                                                View Collections
                                            </a>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className=" lg:inset-y-0 lg:right-0 lg:w-[50%] h-[50vh]">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="https://cdn.pixabay.com/photo/2024/03/27/19/39/ai-generated-8659741_1280.jpg"
                            alt="Featured Jewelry"
                        />{" "}
                    </div>
                </section>

                <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12  bg-gray-900 text-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        {" "}
                        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
                            Featured Collections
                        </h2>
                        <div className="flex items-center space-x-4   bg-gray-900 text-gray-100">
                            {" "}
                            <select className=" border-gray-700   bg-gray-900 text-gray-100 rounded-md text-sm focus:ring-custom focus:border-custom">
                                {" "}
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                                <option>Popular</option>
                            </select>
                            <div className="flex items-center space-x-2">
                                {" "}
                                <button className="p-2 text-gray-400 hover:text-custom">
                                    <i className="fas fa-th-large" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-custom">
                                    <i className="fas fa-th-list" />
                                </button>
                            </div>
                        </div>
                    </div>





                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products && products.length > 0 ? products.map((res, index) => (
                            <div className="bg-gray-800 rounded-lg overflow-hidden group">
                                <div className="relative">
                                    <img
                                        className="w-full h-64 object-cover"
                                        src={res.image}
                                        alt="Crystal Necklace"
                                    />{" "}
                                    <div className="absolute top-4 right-4">
                                        <button className="p-2 bg-gray-900/80 rounded-full text-gray-400 hover:text-custom">
                                            {" "}
                                            <i className="far fa-heart" />
                                        </button>
                                    </div>{" "}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        {" "}
                                        <button onClick={() => handleaddtocart(res)}
                                            className="!rounded-button w-full bg-custom text-white py-2 font-medium hover:bg-custom/90">
                                            Add to Cart
                                        </button>{" "}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-white">
                                        {res.title}
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <div className="flex items-center">
                                            {" "}
                                            <i className="fas fa-star text-yellow-400" />
                                            <i className="fas fa-star text-yellow-400" />
                                            <i className="fas fa-star text-yellow-400" />
                                            <i className="fas fa-star text-yellow-400" />
                                            <i className="fas fa-star-half-alt text-yellow-400" />
                                        </div>
                                        <span className="ml-2 text-sm text-gray-400">(124)</span>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="text-xl font-bold text-white">${res.price}</span>
                                        <span className="text-sm text-gray-400 line-through">
                                            $159.99
                                        </span>
                                    </div>{" "}
                                </div>
                            </div>






                        )) : "<h1>loading...</h1>"
                        }
                    </div>






                    <div className="mt-12 text-center">
                        <button className="!rounded-button inline-flex items-center px-8 py-3 border border-custom text-base font-medium text-custom bg-transparent hover:bg-custom/10">
                            {" "}
                            Load More
                            <i className="fas fa-arrow-right ml-2" />
                        </button>
                    </div>{" "}
                </section>
            </main></div>
    )
}

export default Product