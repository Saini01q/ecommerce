import React from 'react'

function Items() {
    return (
        <div> <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-gray-100">
            <div className="flex overflow-x-auto pb-4 hide-scrollbar">
                {" "}
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">All</span>
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">Necklaces</span>
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">Earrings</span>
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">Bracelets</span>
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">Rings</span>
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 rounded-full px-6 py-3"
                    >
                        {" "}
                        <span className="text-sm font-medium text-white">Sets</span>
                    </a>
                </div>{" "}
            </div>
        </section>
        </div>
    )
}

export default Items