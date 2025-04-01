import React from 'react'
import Items from './Items'
import Product from './Product'

function Herosection() {
    return (
        <div>
            <Product />
            <Items />
            <div
                id="cart-sidebar"
                className="fixed inset-y-0 right-0 w-96 bg-gray-900 border-l border-gray-800 transform translate-x-full transition-transform duration-300 ease-in-out  text-gray-100 min-h-screen"
            >
                {" "}
                <div className="h-full flex flex-col">
                    <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                        {" "}
                        <h2 className="text-lg font-medium text-white">Shopping Cart(3)</h2>
                        <button className="text-gray-400 hover:text-custom">
                            {" "}
                            <i className="fas fa-times" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {" "}
                        <div className="flex items-center space-x-4">
                            <img
                                className="h-20 w-20 object-cover rounded"
                                src="https://creatie.ai/ai/api/search-image?query=A stunning close-up of a luxurious crystal necklace with intricate details, displayed on a dark elegant surface with professional studio lighting, capturing the sparkle and sophistication of the piece&width=200&height=200&orientation=squarish&flag=19824e47-c796-40b4-9b3e-8a955fa7f5e8"
                                alt="Crystal Necklace"
                            />{" "}
                            <div className="flex-1">
                                <h3 className="text-white font-medium">Crystal Dream Necklace</h3>
                                <p className="text-gray-400 text-sm">Quantity: 1</p>
                                <p className="text-custom font-medium">$129.99</p>
                            </div>
                            <button className="text-gray-400 hover:text-custom">
                                {" "}
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            {" "}
                            <img
                                className="h-20 w-20 object-cover rounded"
                                src="https://creatie.ai/ai/api/search-image?query=A pair of elegant drop earrings with pearls and crystals, photographed on a dark velvet surface with dramatic lighting highlighting the intricate details and shimmer of the pieces&width=200&height=200&orientation=squarish&flag=2c7cb8d3-7dea-46d9-b641-bcb62e717cfc"
                                alt="Pearl Earrings"
                            />{" "}
                            <div className="flex-1">
                                <h3 className="text-white font-medium">Pearl Drop Earrings</h3>
                                <p className="text-gray-400 text-sm">Quantity: 1</p>
                                <p className="text-custom font-medium">$79.99</p>
                            </div>
                            <button className="text-gray-400 hover:text-custom">
                                {" "}
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            {" "}
                            <img
                                className="h-20 w-20 object-cover rounded"
                                src="https://tse2.mm.bing.net/th?id=OIP.iXK2krBiW5mV3P9ZKbWZEAHaJQ&pid=Api&P=0&h=180"
                                alt="Crystal Bracelet"
                            />{" "}
                            <div className="flex-1">
                                <h3 className="text-white font-medium">Crystal Link Bracelet</h3>
                                <p className="text-gray-400 text-sm">Quantity: 1</p>
                                <p className="text-custom font-medium">$89.99</p>
                            </div>
                            <button className="text-gray-400 hover:text-custom">
                                {" "}
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    </div>{" "}
                    <div className="p-4 border-t border-gray-800">
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-400">Subtotal</span>
                            <span className="text-white font-medium">$299.97</span>
                        </div>
                        <button className="!rounded-button w-full bg-custom text-white py-3 font-medium hover:bg-custom/90">
                            {" "}
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection