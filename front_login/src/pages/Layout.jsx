

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className='flex min-h-screen '>

                <div className="w-50 min-h-screen bg-white shadow-lg flex flex-col">

                    {/* Logo / Title */}
                    <div className="text-2xl font-bold text-blue-600 text-center py-6 border-b">
                        Panel
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col gap-5 mt-6 px-4">

                        <Link
                            to="home"
                            className=" text-center py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="product"
                            className=" text-center py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-600 transition"
                        >
                            Product
                        </Link>

                        <Link
                            to="/"
                            className=" text-center py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-red-100 hover:text-red-600 transition"
                        >
                            Logout
                        </Link>

                    </div>

                </div>


                <div className='flex-1 border-2 border-green-500'>

                    <header className="h-[8vh] bg-white shadow-sm flex items-center justify-between px-6">

                        <h1 className="text-lg md:text-2xl font-semibold text-gray-800 tracking-wide">
                            Empowering Businesses Through Technology
                        </h1>

                        <div className="text-sm md:text-base font-medium text-gray-600">
                            Welcome to Technogiq
                        </div>

                    </header>



                    <div className='min-h-[84vh] border'>
                        <Outlet />
                    </div>

                    <footer className='h-[8vh] border flex items-center'>
                        Co Reg office : H-110 Gulmohar, delhi - 110004
                    </footer>

                </div>
            </div>
        </>
    )
}

export default Layout
